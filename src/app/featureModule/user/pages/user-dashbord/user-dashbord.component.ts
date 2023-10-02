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
import { environment } from 'src/environments/environment';

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
      this.userData=data
    })
  }
  apiurl=environment.hostName

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
      this.store.dispatch(action.updateBio({form:this.updateBio.value}))
      this.user()
    } 
  }
  uploadProfile(event:Event){
    // const formData = new FormData();
    try {
      const inputElement = event.target as HTMLInputElement;
      const formData = new FormData();
    if (inputElement?.files && inputElement.files.length > 0) {
      formData.append('avatar', inputElement.files[0]);
      // Now you can use formData for uploading
      
    } 
    this.service.updateproimg(formData,this.userData._id).subscribe((data:{success?:string,failed?:string,status?:number})=>{      
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
    } catch (error) {
      console.error(error);
    }   
  }
  getuser(){
    this.store.dispatch(auth.getuser())
  }
}
