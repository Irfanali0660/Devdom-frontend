import { Component, SimpleChanges } from '@angular/core';
import { signupinterface } from '../../interface/signup';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import { isLoadingSelector, signupSelector } from '../../store/selector';
import { UsersService } from 'src/app/coreModule/service/users.service';
import * as auth from '../../store/action' 
import { userinterface } from '../../interface/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  userData!:userinterface
  notification=false
  menu= false;
  isLoading$: Observable<Boolean>;
constructor(private store:Store<appstateinterface>,private userservice: UsersService,private route: Router){
  this.isLoading$=this.store.pipe(select(isLoadingSelector))
}
  ngOnInit(): void {
    this.apilogincheck()
    this.store.pipe(select(signupSelector)).subscribe((data)=>{
      this.userData=data
      console.log(data,'dataa');
    })
    this.getuser()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.store.dispatch(auth.getuser())
  }
  user!:string | boolean
  logout(){
    localStorage.clear()
    this.apilogincheck()
    this.route.navigate(['/'])
  }

  apilogincheck(){
    if(localStorage.getItem('token')){
      this.getuser()
      this.user=true
    }else{
      this.user=false
    }
  }
  generateotp(){
    this.store.dispatch(auth.generateotp())
  }
  getuser(){
    this.store.dispatch(auth.getuser())
  }
notfi(){
  this.notification=!this.notification
  console.log(this.notification);
}

menuclick(){
  this.menu=!this.menu
  console.log(this.menu);
}
}
