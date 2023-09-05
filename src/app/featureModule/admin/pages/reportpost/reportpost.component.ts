import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action'
import { reportData } from '../../store/selector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reportpost',
  templateUrl: './reportpost.component.html',
  styleUrls: ['./reportpost.component.css']
})
export class ReportpostComponent implements OnInit{
  reportpostData: any;
  constructor(private store:Store<appstateinterface>){
    this.reportpost()
    this.store.pipe(select(reportData)).subscribe((data)=>{
      this.reportpostData=data
     })
  }
  ngOnInit(): void {
    
  }
  apiurl=environment.hostName



  reportpost(){
    this.store.dispatch(action.getreportedpost())
  }

  deletepost(id:string){
    this.store.dispatch(action.deletepost({id:id}))
    
  } 
}
