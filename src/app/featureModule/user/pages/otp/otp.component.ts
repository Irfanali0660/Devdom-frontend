import { Component,OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as auth from '../../store/action'
import { FormControl, Validators } from '@angular/forms';
import { errorSelector, signupSelector } from '../../store/selector';
import { appstateinterface } from 'src/app/appSatate.interface';
import { signupinterface } from '../../interface/signup';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit{
  iserror$!: String | null;
  ngOnInit(): void { 
 
      this.store.pipe(select(errorSelector)).subscribe((err)=>{
        this.iserror$=err 
        setTimeout(() => {
          this.iserror$=null
        }, 3000);
      })

      this.countDown();
  }

  constructor(private store:Store<appstateinterface>){
 
  }
  otp!:Number
  isDisabled=true
  verifyotp(){
    console.log(this.otp);
    this.store.dispatch(auth.otp({value:this.otp}))
  }




  count = 60;
  timer: any;


  countDown(): void {
    const spn = document.getElementById('count');
    const btn = document.getElementById('btnCounter');

    if (spn && btn) {
      spn.textContent = this.count.toString();

      if (this.count !== 0) {
        this.timer = setTimeout(() => {
          this.countDown();
          this.count--;
        }, 1000);
      } else {
        // btn.classList.remove('disabled');
        this.isDisabled=false
      }
    }
  }


  Resend(){
    console.log('resend');
    this.store.dispatch(auth.generateotp())
  }
}

