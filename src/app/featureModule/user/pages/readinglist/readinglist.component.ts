import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action' 
import { getreadlist } from '../../store/selector';
import moment from 'moment';
import { UsersService } from "src/app/coreModule/service/users.service";
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';
import { Readinglist } from '../../interface/readinglist';

@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.css']
})
export class ReadinglistComponent {
  readlist!: any[];
  constructor(private store:Store<appstateinterface>,private userservice:UsersService){
    this.getreadlist()
    this.store.pipe(select(getreadlist)).subscribe((readlist)=>{
      this.readlist=readlist
  })
  }
  apiurl=environment.hostName
  getreadlist(){
    this.store.dispatch(action.getreadlist())
  }
  getdate(date:string){
    
    return moment(date).format('MMM DD YYYY');
  }
  remove(id:string){
  this.userservice.removereadlist(id).subscribe(()=>{
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: 'success',
      timerProgressBar:false,
      timer: 5000,
      title: 'removed successfully'
    })
    this.getreadlist()
  })
  }
}
