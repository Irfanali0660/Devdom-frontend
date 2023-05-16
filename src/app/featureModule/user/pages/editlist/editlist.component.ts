import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { listinterface } from '../../interface/list';

import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import { editlist, getlist, getlistcategory } from '../../store/selector';
import * as action from '../../store/action'
import { addlistinterface } from '../../interface/addlist';
import { ActivatedRoute, Router } from '@angular/router';
import moment from 'moment';
import { UsersService } from 'src/app/coreModule/service/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent {

  listcategory?:listinterface[]
  list?:addlistinterface[]
  tags: any[] = []
  data:{
    _id?:string | null
    title?:String| null 
    details?:String| null 
    category?:any
    expdate?:string | null
    date?:string| null
    location?:string | null
    tags?:any
   }={ 
    
    tags:this.tags}
   
  constructor(private store:Store<appstateinterface>,private route: ActivatedRoute,private service:UsersService,private router:Router){
    this.store.pipe(select(getlistcategory)).subscribe((listcategory)=>{
      this.listcategory=listcategory
      console.log(this.listcategory);
  })
  this.route.params.subscribe(params => {
    this.editList(params['id'])
    this.store.pipe(select(editlist)).subscribe((data)=>{
      console.log(data,'dataaaaaa edit fff');
  
      this.data.title=data.title
      this.data.details=data.details
      this.data.category=data.category._id
      this.data.expdate=data.expdate
      this.data.location=data.location  
      this.data._id=data._id
      console.log(this.data,'titleee');
    })
  });
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  
  error!:string | boolean ;
  tagerror!:string | boolean ;

  add(event: MatChipInputEvent): void {
    console.log(event);
    
    let occurrences = this.tags.filter((el) => el === event.value).length;
    console.log(occurrences);
   if(occurrences==0){
    if (this.tags.length < 5) {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }else{
    this.tagerror="max: number of tag is 5"
          setTimeout(() => {
            this.tagerror=false
          }, 6000);
  }
}else{
  this.tagerror="This tag already exist"
          setTimeout(() => {
            this.tagerror=false
          }, 6000);
}
  }

  remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove tag if it no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing tag
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }


  editForm(){
    this.service.updateList(this.data).subscribe((data)=>{
      if(data.success){
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: 'success',
          timerProgressBar:false,
          timer: 5000,
          title: 'list updated successfully'
        })
        this.router.navigate(['/userlist'])
      }
    })
  }
  getexpdate(date:string | null | undefined ): string {
    return moment(date).format('MMM DD YYYY');
  }

  editList(listId:string | null | undefined){
    this.store.dispatch(action.editlist({id:listId}))
  }
}
