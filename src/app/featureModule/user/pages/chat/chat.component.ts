import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action'
import { getuserlist } from '../../store/selector';
import { userinterface } from '../../interface/user';
import { UsersService } from 'src/app/coreModule/service/users.service';
import { Router } from '@angular/router';
import { NgxHttpLoaderService, NgxLoader }from 'ngx-http-loader';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  users!: userinterface[]
  userName:string=''
  public loader = NgxLoader;
  constructor(private store:Store<appstateinterface>,private service:UsersService,private route:Router,private loaderservice: NgxHttpLoaderService){

  this.userslist()
  this.store.pipe(select(getuserlist)).subscribe((users)=>{
    this.users=users
})
  }

  userslist(){
    this.store.dispatch(action.getusers())
  }

  chatroom(userid:String | undefined){
      this.service.chatroom(userid).subscribe((id)=>{
        this.route.navigate([`/chat/${id}/${userid}`])
      })
  }
}
