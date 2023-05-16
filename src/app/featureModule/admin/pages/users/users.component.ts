import { Component,NgIterable,OnInit } from '@angular/core';
import { AdminService } from 'src/app/coreModule/service/admin.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  user!:any
  userName: string = ''
  constructor(private service : AdminService){}
  ngOnInit(): void {
    this.users()
  }

  users(){
    this.service.userData().subscribe((data:any)=>{
      console.log(data); 
      this.user=data 
    })
  }
  block(id:string){
    console.log(id);
    this.service.status(id).subscribe(()=>{
      this.users()
    })
  }



}
