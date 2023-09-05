import { Component,OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as tag from '../../store/action'
import { tagdetails } from '../../store/selector';
import {  appstateinterface } from 'src/app/appSatate.interface';
import { environment } from 'src/environments/environment';
import { taginterface } from '../../interfaces/taginterface';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  ngOnInit(): void { 
    
   }
   apiurl=environment.hostName
   tagdetailsData!:taginterface[] | null
  
  constructor(private store:Store<appstateinterface>){
    this.tags()
   this.store.pipe(select(tagdetails)).subscribe((data)=>{
    this.tagdetailsData=data;
   })
  }
  tags(){
    this.store.dispatch(tag.gettag())
  }
  deletetag(_id:string | number |undefined){    
    this.store.dispatch(tag.deletetag({id:_id}))
    
  }

  gettagdetails(id:string| number |undefined){
    this.store.dispatch(tag.gettagDetails({id:id}))
}
}
