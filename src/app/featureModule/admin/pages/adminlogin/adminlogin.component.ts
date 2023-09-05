import { Component } from '@angular/core';
import { AdminService } from 'src/app/coreModule/service/admin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

constructor(private service:AdminService,private route:Router){}


data={ 
  email:'',
  password:''
  }
  Response?:string | null;
  adsubmit() {
      const data=JSON.stringify(this.data)
      this.service.adminlogin(this.data).subscribe((data)=>{        
        if(data.failed){
          this.Response=data.failed;
          setTimeout(() => {
            this.Response=null;
          }, 5000);
        }else{
          localStorage.setItem('adtoken',(data.token!.token as string))
          localStorage.setItem('adtokenExp',(data.token!.exp as number).toString())
          this.route.navigate(['admin/dashboard'])
        }
      })
  }
}
