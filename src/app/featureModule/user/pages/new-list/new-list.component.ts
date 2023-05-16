import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import { listinterface } from '../../interface/list';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getlistcategory } from '../../store/selector';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import * as action from '../../store/action' 
import { LocationService } from '../../service/location.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {
  listcategory!: listinterface[];
  locations: any=''

  constructor(private store:Store<appstateinterface>,private locationservice:LocationService){
    this.store.pipe(select(getlistcategory)).subscribe((listcategory)=>{
      this.listcategory=listcategory
      console.log(this.listcategory);
  })
  }
 
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: any[] = [];
  error!:string | boolean ;
  tagerror!:string | boolean ;
  Location!:any
  LocationName!:string
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

  list = new FormGroup({
    'title': new FormControl('',Validators.required),
    'details': new FormControl('',Validators.required),
    'category': new FormControl('',Validators.required),
    'expdate': new FormControl('',Validators.required),    
    // 'location': new FormControl('',Validators.required),
    })

    submitlist(){
     if(this.list.valid){
      if(this.Location){
        console.log(this.list.value);
        console.log(this.tags);
        this.store.dispatch(action.addnewlist({formdata:this.list.value,tag:this.tags,location:this.Location}))
      }else{
        this.error="Select the Location"
          window.scrollTo(0, 0);
          setTimeout(() => {
            this.error=false
          }, 3000);
      }
     }else{
          this.error="Enter the values"
          window.scrollTo(0, 0);
          setTimeout(() => {
            this.error=false
          }, 3000);
        }
    }


    getLocations(event: Event) {
      const query = (event.target as HTMLInputElement).value.toLowerCase();
      if (query && query.length > 3) {
        this.locationservice.getLocations(query).subscribe((data: any) => {
          console.log(data);
          this.locations = data;
        });
      } else if (query === '') {
        this.locations = [];
      }
    }

    onSelect(location:any) {
      this.Location=location
      this.LocationName=location.place_name
      console.log(location);
      console.log(this.LocationName);

      this.locations = []; 
    }
}
