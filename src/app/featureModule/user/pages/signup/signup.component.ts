import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsersService } from 'src/app/coreModule/service/users.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as auth from '../../store/action' 
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { errorSelector } from '../../store/selector';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user!: import("@abacritt/angularx-social-login").SocialUser;
  loggedIn!: boolean;
  iserror$!: String | null;

  constructor(private service: UsersService, private _snackbar: MatSnackBar, private route: Router,private store:Store<appstateinterface>,private authservice: SocialAuthService) { 
    this.authservice.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
      this.store.dispatch(auth.socialsignup({token:this.user.idToken}))
    });
    this.store.pipe(select(errorSelector)).subscribe((err)=>{
      this.iserror$=err
      console.log(this.iserror$);
      
      setTimeout(() => {
        this.iserror$=null
      }, 3000);
      })
  }
  ngOnInit(): void { 
    
  }

  signup = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.pattern(/^.{4,}$/)]),
    'email': new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
    'phonenumber': new FormControl('', [Validators.required, Validators.pattern(/^([7-9]\d{9})$/)]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
    ]),
    'conformpassword': new FormControl()
  })

  passwordMismatch = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  error ?: null | string

     submitsignup(){
  if (this.signup.value.password === this.signup.value.conformpassword) {
  if (this.signup.valid) {

   this.store.dispatch(auth.signup({formData:this.signup.value}))

  }else{
    this.error="Enter the values"
          setTimeout(() => {
            this.error = null;
          }, 3000);
  }
  }else{
    this.passwordMismatch = true;
      setTimeout(() => {
        this.passwordMismatch = false;
      }, 3000);
  }
  }

  // submitsignup() {
  //   if (this.signup.value.password === this.signup.value.conformpassword) {
  //     if (this.signup.valid) {
  //       console.log(this.signup.value);
  //       const data = JSON.stringify(this.signup.value)
  //       this.service.SignupData(this.signup.value).subscribe((data: any) => {
  //         console.log(data);
  //         if (data.success) {
  //           this._snackbar.open('Login successfully', 'close', {
  //             horizontalPosition: this.horizontalPosition,
  //             verticalPosition: this.verticalPosition,
  //             duration: 6000,
  //           })
  //           localStorage.setItem('token', data.token.token)
  //           localStorage.setItem('tokenExp', data.token.exp)
  //           this.route.navigate(['/'])

  //         } else {
  //           this.error = data.failed;
  //           setTimeout(() => {
  //             this.error = null;
  //           }, 3000);
  //         }
  //       })
  //     }else{
  //       this.error="Enter the values"
  //       setTimeout(() => {
  //         this.error = null;
  //       }, 3000);
  //     }
  //   } else {
  //     this.passwordMismatch = true;
  //     setTimeout(() => {
  //       this.passwordMismatch = false;
  //     }, 3000);
  //   }
  // }
}
