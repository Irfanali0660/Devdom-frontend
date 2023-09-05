import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as tag from '../../store/action'
import { singletagdetails } from '../../store/selector';
import { ActivatedRoute,Router } from '@angular/router';
import { taginterface } from '../../interfaces/taginterface';
import { environment } from 'src/environments/environment';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

@Component({
  selector: 'app-edittags',
  templateUrl: './edittags.component.html',
  styleUrls: ['./edittags.component.css']
})
export class EdittagsComponent implements OnInit {
  tag!:taginterface | null;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // this.id=params['id']
      this.gettagdetails(params['id'])
    });
    
      
    
  }

  constructor(private store:Store<appstateinterface>,private route: ActivatedRoute ,private router:Router){
    this.store.pipe(select(singletagdetails)).subscribe((data)=>{
      this.tag=data
    })
  }

  apiurl=environment.hostName
   
  files: File[] = [];
  message!:string
  onSelect(event:NgxDropzoneChangeEvent) {         
    if(this.files.length==0 && event.addedFiles.length==1){
      this.files.push(...event.addedFiles);
    }else{
      this.message="Only one image required"
    }
  }
  onRemove(event:File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  imageDrop(){
  }

  tags=new FormGroup({
    'title':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required),
    'id':new FormControl('')
  })

  gettagdetails(id:string | number){
    this.store.dispatch(tag.gettagDetails({id:id}))
  }

  edittag(){
   if (this.tags.value) {
      this.store.dispatch(tag.edittag({TagData:this.tags.value,image:this.files}))
   }else{
    this.message="Enter the values"
   }
  }

}
