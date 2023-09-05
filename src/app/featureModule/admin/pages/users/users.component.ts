import { Component,NgIterable,OnInit } from '@angular/core';
import { AdminService } from 'src/app/coreModule/service/admin.service';
import { userinterface } from 'src/app/featureModule/user/interface/user';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userData:userinterface[]=[]
  userName: string = ''
  constructor(private service : AdminService){}
  ngOnInit(): void {
    this.users()
  }
  apiurl=environment.hostName
  users(){
    this.service.userData().subscribe((data:userinterface[])=>{      
      this.userData=data 
    })
  }
  block(id:string){
    this.service.status(id).subscribe(()=>{
      this.users()
    })
  }
}
