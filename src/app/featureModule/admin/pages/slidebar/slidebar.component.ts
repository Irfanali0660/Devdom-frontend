import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit{
  ngOnInit(): void {}
  constructor(private route:Router){}
  logout(){
    localStorage.clear()
    this.route.navigate(['/adminlogin'])
  }

}
