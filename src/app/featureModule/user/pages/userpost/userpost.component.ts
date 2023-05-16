import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action'
import { getpostdetailsselector } from '../../store/selector';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/coreModule/service/users.service';


@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent{
  postdetails!: any[];


  constructor(private store:Store<appstateinterface>,private service:UsersService){
    this.userpost()

    this.store.pipe(select(getpostdetailsselector)).subscribe((data)=>{
      this.postdetails=data;
      console.log(this.postdetails);
    })

  }

  userpost(){
    this.store.dispatch(action.getuserpost())
  }
  deletepost(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result:any) => {
      if (result.isConfirmed) {
      this.service.deletepost(id).subscribe(()=>{
        this.store.pipe(select(getpostdetailsselector)).subscribe((data)=>{
          this.postdetails=data.filter((dt:any)=>{ return dt._id!=id
          })
        })
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timerProgressBar:false,
          timer: 5000,
          title: 'post deleted successfully'
        })
       
      })
        
      }
    }) 
  }
}
