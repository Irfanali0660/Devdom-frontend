import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmincheckService {

  constructor() { }
  
  getadminstatus(){
    if( localStorage.getItem('adtoken')){
      return true
    }
    return false
  }

}
