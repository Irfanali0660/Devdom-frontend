import { Component ,OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import { getpostdetailsselector, singletag } from '../../store/selector';
import { taginterface } from 'src/app/featureModule/admin/interfaces/taginterface';
import { ActivatedRoute } from '@angular/router';
import * as action from '../../store/action'
import { addpostinterface } from '../../interface/addpost';


@Component({
  selector: 'app-singletag',
  templateUrl: './singletag.component.html',
  styleUrls: ['./singletag.component.css']
})
export class SingletagComponent implements OnInit{
  tagdetailsData!:any;
  tagpostData!:any

  constructor(private store:Store<appstateinterface>,private route: ActivatedRoute){
    this.store.pipe(select(singletag)).subscribe((data)=>{
      this.tagdetailsData=data
     })
     this.route.params.subscribe(params => {
       this.tagpost(params['id'])
      this.singletag(params['id'])
    });
    this.store.pipe(select(getpostdetailsselector)).subscribe((data)=>{
      this.tagpostData=data
      console.log(this.tagpostData,'tagData');
      
     })
   }
  ngOnInit(): void {

  }
  singletag(id:string){
     this.store.dispatch(action.getsingletag({id:id}))
  }
  tagpost(id:string){
    this.store.dispatch(action.tagpost({id:id}))
  }
}
