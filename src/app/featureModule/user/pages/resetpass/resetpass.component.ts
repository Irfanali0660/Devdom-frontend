import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import * as auth from '../../store/action' 
import { appstateinterface } from 'src/app/appSatate.interface';
import { Store, select } from '@ngrx/store';
import { errorSelector } from '../../store/selector';


@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit{
  constructor(private route:ActivatedRoute,private store:Store<appstateinterface>){
    this.route.params.subscribe(params => {
      // this.id=params['id']
     this.id= params['id']
    });
    this.resetpass= new FormGroup({
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
      ]),
      'confirmpassword': new FormControl(),
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
  resetpass!:FormGroup
  

  reset(){
    if(this.resetpass.valid){
      if(this.resetpass.value.password === this.resetpass.value.confirmpassword){
        console.log(this.resetpass.value);
        this.store.dispatch(auth.resetpass({formData:this.resetpass.value}))
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
}
