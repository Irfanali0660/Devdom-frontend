import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import { ChatsocketService } from 'src/app/coreModule/service/chatsocket.service';
import * as action from '../../store/action'
import { chatmessage, getuserlist, signupSelector } from '../../store/selector';
import moment from 'moment';
// import { ThemeService } from "stream-chat-angular";
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-singlechat',
  templateUrl: './singlechat.component.html',
  styleUrls: ['./singlechat.component.css']
})
export class SinglechatComponent implements OnInit{
  roomid: any;
  message_input: string='';
  id: any;
  chatmessage: any;
  userData: any;
  isEmojiPickerVisible!: boolean;

  constructor(private route: ActivatedRoute ,private socketchatService:ChatsocketService,private store:Store<appstateinterface>){
    this.route.params.subscribe(params => {
      this.chat(params['id'])
      this.user(params['userid'])

      this.socketchatService.connect({roomid:params['id']},{token: localStorage.getItem('token')??'noAcToken'})
    });

    this.store.pipe(select(signupSelector)).subscribe((data)=>{
      this.id=data._id
      console.log(this.id,"signup");
      
     }) 
      this.store.pipe(select(chatmessage)).subscribe((data)=>{
      this.chatmessage=data
      console.log(data); 
     })
    //  this.theme$ = themeService.theme$;
  }
  ngOnInit(): void {
    this.socketchatService.on('chat',(chat:any)=>{
      console.log(chat,'chatreplay');
      this.chatmessage=chat
    })
  }


  send_message(f: NgForm):any{
    console.log(this.message_input);
    
    if(this.message_input.trim().length<1)return this.message_input ='';
    if(f.invalid)return;
    
    this.socketchatService.emit('chat',this.message_input)
    
    this.message_input =''
  
  }

    chat(id:string | null | undefined){
      this.store.dispatch(action.chatmessege({id:id}))
    }
    user(id:string){
      this.store.pipe(select(getuserlist)).subscribe((user)=>{
        this.userData=user.filter((dt)=>{return dt._id==id}) 
        console.log(this.userData);
          
      })
    }
    gettime(date:string | null | undefined ): string {
      return moment(date).format('h:mm A');
    }

    isOpened = false;
  // theme$: Observable<string>;
  @Input() emojiInput$: Subject<string> | undefined;
  @ViewChild("container") container: ElementRef<HTMLElement> | undefined;



  emojiSelected(event: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.emojiInput$?.next(event.emoji.native);
  }

  eventHandler = (event: Event) => {
    // Watching for outside clicks
    if (!this.container?.nativeElement.contains(event.target as Node)) {
      this.isOpened = false;
      window.removeEventListener("click", this.eventHandler);
    }
  };

  toggled() {
    if (!this.container) {
      return;
    }
    this.isOpened = !this.isOpened;
    if (this.isOpened) {
      window.addEventListener("click", this.eventHandler);
    } else {
      window.removeEventListener("click", this.eventHandler);
    }
  }
  addEmoji(event:any) {
    this.message_input += event.emoji.native;
    this.isEmojiPickerVisible = false;
 }  
}
