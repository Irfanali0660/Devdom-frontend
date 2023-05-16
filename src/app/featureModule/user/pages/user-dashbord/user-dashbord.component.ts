import { Component } from '@angular/core';
import { userinterface } from '../../interface/user';
import { appstateinterface } from 'src/app/appSatate.interface';
import { Store, select } from '@ngrx/store';
import { signupSelector } from '../../store/selector';
import moment from 'moment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as action from '../../store/action' 
import { UsersService } from 'src/app/coreModule/service/users.service';
import * as auth from '../../store/action' 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.css']
})
export class UserDashbordComponent {
  model=false
  userData!:userinterface
  constructor(private store:Store<appstateinterface>,private service:UsersService){
   this.user()
  }
  user(){
    this.store.pipe(select(signupSelector)).subscribe((data)=>{
      console.log(data);
      this.userData=data
      console.log(data,'dataa');
    })
  }

  getexpdate(date:string | null | undefined |Date): string {
    return moment(date).format('MMM DD YYYY');
  }
  getdate(date:string | null | undefined |Date): string {
    return moment(date).format('MMM YYYY');
  }

  updateBio = new FormGroup({
    'userName': new FormControl('', [Validators.required, Validators.pattern(/^.{4,}$/)]),
    'phone': new FormControl('', [Validators.required, Validators.pattern(/^([7-9]\d{9})$/)]),
    'location': new FormControl('', [Validators.required]),
    'gender': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'birthday': new FormControl('', [Validators.required]),
    'work': new FormControl('', [Validators.required]),
  })

  bio(){
    if(this.updateBio.valid){
      console.log(this.updateBio.value);
      this.store.dispatch(action.updateBio({form:this.updateBio.value}))
      this.user()
    } 
  }
  uploadProfile(event:any){

    console.log(event);
    const formData = new FormData();
    try {
      formData.append('avatar', event.target.files[0]);
      // Rest of the code to handle the FormData object
    } catch (error) {
      console.error(error);
    }    console.log(formData);
    this.service.updateproimg(formData,this.userData._id).subscribe((data:any)=>{
      console.log(data);
     if(data.success){
      this.getuser()
      this.user()
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'success',
        timerProgressBar:false,
        timer: 5000,
        title: 'image added successfully'
      })
     }
     else{
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: 'warning',
        timerProgressBar:false,
        timer: 5000,
        title: 'Error found'
      })
     }
    })
  }
  getuser(){
    this.store.dispatch(auth.getuser())
  }
}
