import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as tag from '../../store/action'
import { singletagdetails } from '../../store/selector';
import { ActivatedRoute,Router } from '@angular/router';
import { taginterface } from '../../interfaces/taginterface';


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
      console.log(data?.image);
      this.tag=data
      console.log(this.tag?._id);
    })
  }
   
  files: File[] = [];
  message!:string
  onSelect(event:any) {     
    if(this.files.length==0 && event.addedFiles.length==1){
      this.files.push(...event.addedFiles);
    }else{
      console.log("no required");
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
    'id':new FormControl('')
  })

  gettagdetails(tagid:string){
    this.store.dispatch(tag.gettagDetails({id:tagid}))
  }

  edittag(){
   if (this.tags.value) {

      console.log("hello");
      
      console.log(this.tags.value);
      
      this.store.dispatch(tag.edittag({TagData:this.tags.value,image:this.files}))
  
   }else{
    this.message="Enter the values"
   }
  }

}
