import { Component,ElementRef,OnDestroy,OnInit,Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action'
import { comments, signupSelector, singlepostdetails } from '../../store/selector';
import { SocketService } from '../../../../coreModule/service/socket.service';  
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { signupinterface } from '../../interface/signup';
import { ReplaysocketService } from 'src/app/coreModule/service/replaysocket.service';
import { UsersService } from 'src/app/coreModule/service/users.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit,OnDestroy{
menutoggle=false
postdetailsData:any;
commentData!:any[]
chats?:Observable<any[] | undefined>;
user?:signupinterface
likes?:boolean
replay_input:string=''
@ViewChild('content') content!: ElementRef;
  message_input: string='';
  id!:string
  commentid!: string;
  commenttoggle=false;
  constructor(private store:Store<appstateinterface>,private route: ActivatedRoute,private renderer: Renderer2, private el: ElementRef,private socketService: SocketService ,public replaysocket:ReplaysocketService,private service:UsersService,private router: Router){

    this.store.pipe(select(singlepostdetails)).subscribe((data)=>{
      this.postdetailsData=data
      console.log(this.postdetailsData,'singlepost');
      if(localStorage.getItem('token')){
        if(this.postdetailsData){
          console.log(this.postdetailsData);
          if(this.postdetailsData.likes?.length>0 && this.postdetailsData.likes?.includes(this.user?._id) ){
            console.log('true');
            this.likes=true
          }else{
            console.log('false+++++++++++++++++++++++++++++++==');
            this.likes=false
          }
      }
    }
    })
    this.userData()
    this.route.params.subscribe(params => {
      this.id=params['id']
      this.singlepost(params['id'])
      this.socketService.connect({id:params['id']},{token: localStorage.getItem('token')??'noAcToken'})
      this.replaysocket.connect({id:params['id']},{token: localStorage.getItem('token')??'noAcToken'})
      this.comments(params['id'])
    });
    this.store.pipe(select(signupSelector)).subscribe((user)=>{
      this.user=user
  })
    this.store.pipe(select(comments)).subscribe((data)=>{
      this.commentData=data
      console.log(data,'comment');
    })
  }
  
  ngAfterViewInit(){
  //   if(localStorage.getItem('token')){
  //     if(this.postdetailsData){
  //       console.log(this.postdetailsData);
  //       if(this.postdetailsData.likes.includes(this.user?._id) && this.postdetailsData.likes.length>0){
  //         console.log('true');
  //         this.likes=true
  //       }else{
  //         console.log('false+++++++++++++++++++++++++++++++==');
  //         this.likes=false
  //       }
  //   }
  // }
  }
  ngOnInit(): void {
    // this.renderer.setStyle(document.body, 'overflow', 'hidden');

    this.socketService.on('new-message',(data:any)=>{
      console.log(data,'backend');
      this.commentData=data
      console.log(data); 
    })
    this.replaysocket.on('new-replay',(data:any)=>{
      console.log(data,'replaybackend');
      this.commentData=data
      console.log(data); 
    })
    window.scrollTo(0, 0);
  }
  ngOnDestroy() {
    // this.renderer.setStyle(document.body, 'overflow', 'auto');
  }

  

singlepost(id:string){
this.store.dispatch(action.getsinglepost({postid:id}))
}

send_message(f: NgForm):any{
  console.log(this.message_input);
  
  if(this.message_input.trim().length<1)return this.message_input ='';
  if(f.invalid)return;
  
  this.socketService.emit('message',this.message_input)
  
  this.message_input =''
  }

  send_replay(f: NgForm):any{
    console.log(this.message_input);
    
    if(this.message_input.trim().length<1)return this.message_input ='';
    if(f.invalid)return;
    
    this.socketService.emit('message',this.message_input)
    
    this.message_input =''
  }

  comments(id:string){
    this.store.dispatch(action.comments({id:id}))
  }

  getDateRelative(date:Date): string {
    return moment(date).fromNow();
  }
  toggleLike() {
    console.log(this.likes);
    this.likes = !this.likes;
    this.like();
  }
  like(){
    this.store.dispatch(action.addlike({id:this.id,value:this.likes}))
    this.singlepost(this.id)
  }

  userData(){
    console.log("USERNEW");
    this.store.dispatch(action.getuser())
  }
  readlist(id:string){
    console.log(id);
    this.store.dispatch(action.addreadlist({id:id}))
  }
  dropclick(id:string){
    console.log(id);
    this.commentid=id
    this.commenttoggle=!this.commenttoggle
  }
  replay_message(f: NgForm,id:string):any{
    console.log(this.replay_input);
    if(this.replay_input.trim().length<1)return this.replay_input ='';
    if(f.invalid)return;
    
    this.replaysocket.emit('replay',{message:this.replay_input,commentId:id})
    
    this.replay_input =''
  }

  deletecomment(id:string){
    console.log(id);
    
    this.service.deletecomment(id).subscribe(()=>{
      this.comments(this.id)
    })
  }
}
