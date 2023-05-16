import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import moment from 'moment';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action'
import { getlist } from '../../store/selector';
import { addlistinterface } from '../../interface/addlist';
import { UsersService } from 'src/app/coreModule/service/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  list!:addlistinterface[];

constructor(private store:Store<appstateinterface>,private service:UsersService){
this.userlist()
this.store.pipe(select(getlist)).subscribe((list)=>{
  this.list=list
  console.log(this.list,'list');
})
}

userlist(){
  this.store.dispatch(action.userlist()) 
}
  getexpdate(date:string | null | undefined ): string {
    return moment(date).format('MMM DD YYYY');
  }
  deletelist(id:string| null | undefined){
    this.service.deletelist(id).subscribe((data)=>{
      if(data.success){
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timerProgressBar:false,
          timer: 5000,
          title: 'list deleted successfully'
        })
        this.store.pipe(select(getlist)).subscribe((list)=>{
        this.list=list.filter((li)=>{return li._id!=id})
        })
      }
    })
  }


}
