import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import * as auth from '../../store/action' 
import { appstateinterface } from 'src/app/appSatate.interface';
import { Store, select } from '@ngrx/store';
import { errorSelector } from '../../store/selector';
import { UsersService } from 'src/app/coreModule/service/users.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  constructor(private route:ActivatedRoute,private store:Store<appstateinterface>,private service:UsersService){
    this.route.params.subscribe(params => {
      // this.id=params['id']
     this.id= params['id']
    });
    this.changepass= new FormGroup({
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
      ]),
      'confirmpassword': new FormControl(),
      'id':new FormControl(this.id)
    })
    this.password= new FormGroup({
      'checkpass': new FormControl(),
      'id':new FormControl(this.id)
    })

    this.store.pipe(select(errorSelector)).subscribe((err)=>{
      this.error=err
      setTimeout(() => {
        this.error=null
      }, 3000);
      })
  }
  ngOnInit(): void {
    
  }
  id!:string
  error!:String | null
  changepass!:FormGroup
  password!:FormGroup
  isDivVisible: boolean = true;
  ispassworddiv: boolean = false;
  
  changepassword(){
    if(this.changepass.valid){
      if(this.changepass.value.password === this.changepass.value.confirmpassword){
        console.log(this.changepass.value);
        this.store.dispatch(auth.changepass({formData:this.changepass.value}))
      }else{
        this.error = 'confirm password is incorrect';
        setTimeout(() => {
          this.error = null;
        }, 3000);
      }
    }else{
      this.error = 'enter new password';
      setTimeout(() => {
        this.error = null;
      }, 3000);
    }
  } 

  chackpass(){
    if(this.password.valid){
      this.service.passwordcheck(this.password.value).subscribe((status)=>{
        console.log(status);
        
     if(status.success){
      this.ispassworddiv=true
      this.isDivVisible=false
     }else{
      this.error = status.Error;
      setTimeout(() => {
        this.error = null;
      }, 3000);
     }
      })

    }
  }
}
