import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as tag from '../../store/action'

@Component({
  selector: 'app-addtags',
  templateUrl: './addtags.component.html',
  styleUrls: ['./addtags.component.css']
})
export class AddtagsComponent implements OnInit{
  ngOnInit(): void {  }
  constructor(private store:Store<appstateinterface>){}
   
  files: File[] = [];
  message!:string
  onSelect(event:any) {     
    if(this.files.length==0 && event.addedFiles.length==1){
      this.files.push(...event.addedFiles);
    }else{
      this.message="Only one image required"
    }
  }
  onRemove(event:File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  imageDrop(){
    console.log(this.files);
  }

  tags=new FormGroup({
    'title':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required),
  })

  addtag(){
   if (this.tags.valid) {
    if(this.files.length==1){
      
      this.store.dispatch(tag.addtag({TagData:this.tags.value,image:this.files}))
    }else{
      this.message="please add one image"
    }
   }else{
    this.message="Enter the values"
   }
  }
}
