import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import { signupinterface } from 'src/app/featureModule/user/interface/signup';
import { signupSelector } from 'src/app/featureModule/user/store/selector';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsercheckService {
  signup!:signupinterface
  constructor(private store:Store<appstateinterface>) { 
    this.store.pipe(select(signupSelector)).subscribe((data)=>{
      this.signup=data
      console.log(data,'dataa');
      })
  }
  getuserstatus(){
    if( localStorage.getItem('token')){
      return true
    }
    return false
  }
  getverify(){
    if(this.signup.verifyemail==true){
      return true
    }else{
      return false;
    }
  }
    blockuser(){
    if(this.signup.status==true){
      return false
    }else{
      return true
    }
  }
}
