import { Component,OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as tag from '../../store/action'
import { tagdetails } from '../../store/selector';
import {  appstateinterface } from 'src/app/appSatate.interface';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  ngOnInit(): void { 
    
   }
   tagdetailsData!:any[]
  constructor(private store:Store<appstateinterface>){
    this.tags()
   this.store.pipe(select(tagdetails)).subscribe((data)=>{
    this.tagdetailsData=data;
   })
  }
  tags(){
    this.store.dispatch(tag.gettag())
  }
  deletetag(tagid:string){
    this.store.dispatch(tag.deletetag({id:tagid}))
    
  }
  gettagdetails(tagid:string){
    this.store.dispatch(tag.gettagDetails({id:tagid}))
}
}
