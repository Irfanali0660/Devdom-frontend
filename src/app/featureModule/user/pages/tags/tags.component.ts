import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appSatate.interface';
import * as action from '../../store/action' 
import { tagselector } from '../../store/selector';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { taginterface } from 'src/app/featureModule/admin/interfaces/taginterface';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: taginterface[]=[];
  constructor(private store:Store<appstateinterface>,private route:Router){
    this.gettags()
    this.store.pipe(select(tagselector)).subscribe((data)=>{
      this.tags=data
      })
  }
  apiurl=environment.hostName
  gettags() {
    this.store.dispatch(action.gettags())
  }
  getsingletag(id:string | number){
    this.route.navigate(['/singletag/'+id])
  }
}
