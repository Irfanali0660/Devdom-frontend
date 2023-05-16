import { Component,OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action'
import { adlistselector } from '../../store/selector';
import { listinterface } from 'src/app/featureModule/user/interface/list';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  listcate!:listinterface[]
index: any;
  constructor(private store:Store<appstateinterface>){
    this.store.pipe(select(adlistselector)).subscribe((data)=>{
      this.listcate=data
      console.log(this.listcate);
     })
     
  }
  ngOnInit(): void {
    this.list()
  }

  list(){
    this.store.dispatch(action.adgetlist())
  }
  liststatus(id:string | undefined){
    this.store.dispatch(action.liststatus({listid:id}))
    this.list()
  }
}



