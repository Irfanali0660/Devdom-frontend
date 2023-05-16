import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { signupinterface } from '../../featureModule/user/interface/signup';
import { logininterface } from '../../featureModule/user/interface/login';

import { SafeHtml } from '@angular/platform-browser';
import { addpostinterface } from 'src/app/featureModule/user/interface/addpost';
import { resetpassinterface } from 'src/app/featureModule/user/interface/resetpass';
import { addlistinterface } from 'src/app/featureModule/user/interface/addlist';
import { reportinterface } from 'src/app/featureModule/user/interface/report';
import { userinterface } from 'src/app/featureModule/user/interface/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) {  }

  localhost='http://localhost:4000'

  SignupData(data:signupinterface) :Observable<any>{
    return this.http.post(`${this.localhost}/users/signup`,data,this.httpOptions)
  }

  socialsignup(data:string) :Observable<any>{
    return this.http.get(`${this.localhost}/users/socialsignup/${data}`,this.httpOptions)
  }

  loginData(data:logininterface) :Observable<any>{
    return this.http.post(`${this.localhost}/users/login`,data,this.httpOptions)
  }

  sociallogin(data:any) :Observable<any>{

    
    return this.http.get(`${this.localhost}/users/sociallogin/${data}`,this.httpOptions)
  }

  generateotp():Observable<any>{
    return this.http.get(`${this.localhost}/users/generateotp`,this.httpOptions)
  }
  otp(data:Number):Observable<any>{
    return this.http.put(`${this.localhost}/users/otp`,{data},this.httpOptions)
  }

  addpost(data:addpostinterface) :Observable<any>{

    let formData = new FormData()
    // formData.append('image',data.image)
    for (const key in data) {
      formData.append(key,data[key])
    }
    console.log(formData);
    
    
    return this.http.post(`${this.localhost}/users/addpost`,formData)
  }
  gettag():Observable<any>{
    return this.http.get(`${this.localhost}/users/gettag`,this.httpOptions)
  }

  gettagdetails():Observable<any>{
    return this.http.get(`${this.localhost}/users/gettagdetails`,this.httpOptions)
  }
  getuser():Observable<any>{
    return this.http.get(`${this.localhost}/users/getuser`,this.httpOptions)
  }

  getpost():Observable<any>{
    return this.http.get(`${this.localhost}/users/getpostdetails`,this.httpOptions)
  }

  getsingletag(id:string):Observable<any>{
    return this.http.get(`${this.localhost}/users/getsingletag/${id}`,this.httpOptions)
  }
  getsinglepost(id:string):Observable<any>{
    return this.http.get(`${this.localhost}/users/singlepost/${id}`,this.httpOptions)
  }
  forgotpass(email:string | undefined | null):Observable<any>{
    return this.http.post(`${this.localhost}/users/forgotpass`,{email},this.httpOptions)
  }
  restpass(formData:resetpassinterface):Observable<any>{
    return this.http.post(`${this.localhost}/users/resetpassword`,formData,this.httpOptions)
  }
  comments(id:string):Observable<any>{
    return this.http.post(`${this.localhost}/users/comments`,{id},this.httpOptions)
  }
  addlike(id:string,value:boolean | undefined):Observable<any>{
    return this.http.put(`${this.localhost}/users/addlike`,{id,value},this.httpOptions)
  }
  getlistcategory():Observable<any>{
    return this.http.get(`${this.localhost}/users/getlistcate`,this.httpOptions)
  }
  addnewlist(formData:addlistinterface,tags:Array<string>,location:any):Observable<any>{
    return this.http.post(`${this.localhost}/users/addnewlist`,{formData,tags,location},this.httpOptions)
  }
  getlist():Observable<any>{
    return this.http.get(`${this.localhost}/users/getlist`,this.httpOptions)
  }
  gettagpost(id:string):Observable<any>{
    return this.http.get(`${this.localhost}/users/gettagpost?id=${id}`,this.httpOptions)
  }
  report(id:string,formData:reportinterface):Observable<any>{
    return this.http.post(`${this.localhost}/users/report`,{id,formData},this.httpOptions)
  }
  gettags():Observable<any>{
    return this.http.get(`${this.localhost}/users/gettags`,this.httpOptions)
  }
  addreadlist(id:string):Observable<any>{
    return this.http.post(`${this.localhost}/users/addreadlist`,{id},this.httpOptions)
  }
  getreadlist():Observable<any>{
    return this.http.get(`${this.localhost}/users/getreadlist`,this.httpOptions)
  }

  removereadlist(id:string):Observable<any>{      
    return this.http.delete(`${this.localhost}/users/removereadlist/${id}`,this.httpOptions)
  }
  updateBio(form:userinterface):Observable<any>{      
    return this.http.put(`${this.localhost}/users/updatebio`,{form},this.httpOptions)
  }

  userlist():Observable<any>{      
    return this.http.get(`${this.localhost}/users/userlist`,this.httpOptions)
  }

  deletelist(id:string| null | undefined):Observable<any>{      
    return this.http.delete(`${this.localhost}/users/deletelist/${id}`,this.httpOptions)
  }

  editList(id:string | null | undefined):Observable<any>{     
    return this.http.get(`${this.localhost}/users/editlist/${id}`,this.httpOptions)
  }

  updateList(list:addlistinterface):Observable<any>{     
    return this.http.put(`${this.localhost}/users/updateList`,list,this.httpOptions)
  }

  getusers():Observable<any>{     
    return this.http.get(`${this.localhost}/users/getusers`,this.httpOptions)
  }
  chatroom(id:String | undefined):Observable<any>{     
    return this.http.get(`${this.localhost}/users/chatroom/${id}`,this.httpOptions)
  }

  chatmessage(id:string | null | undefined):Observable<any>{     
    return this.http.get(`${this.localhost}/users/chatmessage/${id}`,this.httpOptions)
  }

  getuserpost():Observable<any>{     
    return this.http.get(`${this.localhost}/users/getuserpost`,this.httpOptions)
  }

  deletepost(id:string| null | undefined):Observable<any>{      
    return this.http.delete(`${this.localhost}/users/deletepost/${id}`,this.httpOptions)
  }

  deletecomment(id:string| null | undefined):Observable<any>{          
    return this.http.delete(`${this.localhost}/users/deletecomment/${id}`,this.httpOptions)
  }
  blockStatus():Observable<any>{     
    return this.http.get(`${this.localhost}/users/blockStatus`,this.httpOptions)
  }
  singlelist(id:string):Observable<any>{
    return this.http.get(`${this.localhost}/users/singlelist/${id}`,this.httpOptions)
  }
  passwordcheck(formdata:resetpassinterface):Observable<any>{
    return this.http.post(`${this.localhost}/users/passwordcheck`,{formdata},this.httpOptions)
  }
  updateproimg(formdata:any,id:String | undefined):Observable<any>{
    console.log(formdata);
    return this.http.post(`${this.localhost}/users/updateproimg/${id}`,formdata,)
  }
}
