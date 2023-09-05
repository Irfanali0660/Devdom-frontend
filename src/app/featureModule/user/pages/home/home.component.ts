import { Component,OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import * as action from '../../store/action'
import { getlist, getpostdetailsselector, isLoadingSelector, postLoading, tagdetailsselector } from '../../store/selector';
import { appstateinterface } from 'src/app/appSatate.interface';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import moment from 'moment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addlistinterface } from '../../interface/addlist';
import { postinterface } from '../../interface/post';
import { taginterface } from 'src/app/featureModule/admin/interfaces/taginterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  tagdetailsData!:taginterface[]
  menutoggle=false
  postdetails!:postinterface[]
  id!:string
  model= false;
  popoveruser=false
  postload$: Observable<Boolean>;
  list!: addlistinterface[]
  ngOnInit(): void {
    this.tags()
    this.post()
  }
 constructor(private store:Store<appstateinterface>,private route:Router){
  this.store.pipe(select(tagdetailsselector)).subscribe((data)=>{
    this.tagdetailsData=data;
   })
   
   this.postload$=this.store.pipe(select(postLoading))
   this.store.pipe(select(getpostdetailsselector)).subscribe((data)=>{
     this.postdetails=data;     
   })
   this.getlist()
   this.store.pipe(select(getlist)).subscribe((list)=>{
    this.list=list
  })
 }
  tags(){
    this.store.dispatch(action.gettagdetails())
  }
  post(){    
    this.store.dispatch(action.getpostdetails())
  }
  getsingletag(id:string | number){
    this.route.navigate(['/singletag/'+id])
  } 
  dropclick(id:string | undefined){
  if(id){
    this.menutoggle=!this.menutoggle
    this.id=id
  }
  }
  modelclick(){
    this.model=!this.model
    this.menutoggle=!this.menutoggle
    
  }
  apiurl=environment.hostName
  report = new FormGroup({
    'reportissue': new FormControl('',Validators.required),
    })
  reportsubmit(){
   if(this.report.valid){
    this.store.dispatch(action.report({id:this.id,formData:this.report.value}))
    this.model=!this.model
   }else{
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: 'warning',
      timerProgressBar:false,
      timer: 5000,
      title: 'select the issue'
    })
    this.model=!this.model
   }
  }
  getlist(){
    this.store.dispatch(action.getlist())
  }
  popover(id:string | undefined){
    if(id){
      this.popoveruser=!this.popoveruser
      this.id=id
    }
  }
  getDate(date:string | null | undefined ): string {
    return moment(date).fromNow();
  }
}
