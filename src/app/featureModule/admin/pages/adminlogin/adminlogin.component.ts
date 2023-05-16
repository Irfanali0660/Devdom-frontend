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
  Response:any;
  adsubmit() {
    console.log(JSON.stringify(this.data)); 
      const data=JSON.stringify(this.data)
      this.service.adminlogin(data).subscribe((data)=>{
        console.log(JSON.stringify(data)+"Response");
        if(data.failed){
          this.Response=data.failed;
          setTimeout(() => {
            this.Response=null;
          }, 5000);
        }else{
          localStorage.setItem('adtoken',data.token.token)
          localStorage.setItem('adtokenExp',data.token.exp)
          this.route.navigate(['admin/dashboard'])
        }
      })
  }
}
