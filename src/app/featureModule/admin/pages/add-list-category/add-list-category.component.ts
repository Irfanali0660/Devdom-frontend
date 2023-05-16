import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action'

@Component({
  selector: 'app-add-list-category',
  templateUrl: './add-list-category.component.html',
  styleUrls: ['./add-list-category.component.css']
})
export class AddListCategoryComponent implements OnInit{
  ngOnInit(): void { }

constructor(private store:Store<appstateinterface>){}
  listcategory=new FormGroup({
    'listcategory':new FormControl('',Validators.required),
    'description':new FormControl('',Validators.required),
  })


  addlist(){
    console.log(this.listcategory.value);
    this.store.dispatch(action.addlist({listCategory:this.listcategory.value}))
  }
}


