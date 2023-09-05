import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { signupinterface } from '../../featureModule/user/interface/signup';
import { logininterface } from '../../featureModule/user/interface/login';

import { addpostinterface } from 'src/app/featureModule/user/interface/addpost';
import { resetpassinterface } from 'src/app/featureModule/user/interface/resetpass';
import { addlistinterface } from 'src/app/featureModule/user/interface/addlist';
import { reportinterface } from 'src/app/featureModule/user/interface/report';
import { userinterface } from 'src/app/featureModule/user/interface/user';
import { environment } from 'src/environments/environment';
import { Otp } from 'src/app/featureModule/user/interface/otp';
import { taginterface } from 'src/app/featureModule/admin/interfaces/taginterface';
import { Response } from 'src/app/featureModule/user/interface/response';
import { Comments } from 'src/app/featureModule/user/interface/comments';
import { listinterface } from 'src/app/featureModule/user/interface/list';
import { googlesign } from 'src/app/featureModule/user/interface/googlesign';
import { Sociallogin } from 'src/app/featureModule/user/interface/sociallogin';
import { placeinterface } from 'src/app/featureModule/user/interface/placeinterface';


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
  
  localhost=environment.socketUrl
  
  SignupData(data:signupinterface):Observable<signupinterface>{
    return this.http.post<signupinterface>(`${this.localhost}/users/signup`,data,this.httpOptions)
  }

  socialsignup(data:string) :Observable<signupinterface>{
    return this.http.get(`${this.localhost}/users/socialsignup/${data}`,this.httpOptions)
  }

  loginData(data:logininterface) :Observable<logininterface>{
    return this.http.post(`${this.localhost}/users/login`,data,this.httpOptions)
  }

  sociallogin(data:googlesign) :Observable<Sociallogin>{
    return this.http.get<Sociallogin>(`${this.localhost}/users/sociallogin/${data}`,this.httpOptions)
  }

  generateotp():Observable<Object>{
    return this.http.get(`${this.localhost}/users/generateotp`,this.httpOptions)
  }
  otp(data:Number):Observable<Otp>{
    return this.http.put(`${this.localhost}/users/otp`,{data},this.httpOptions)
  }

  addpost(data:addpostinterface) :Observable<addpostinterface>{

    let formData = new FormData()
    for (const key in data) {
      formData.append(key,data[key])
    }
    
    return this.http.post(`${this.localhost}/users/addpost`,formData)
  }
  gettag():Observable<taginterface>{
    return this.http.get(`${this.localhost}/users/gettag`,this.httpOptions)
  }

  gettagdetails():Observable<taginterface[]>{
    return this.http.get<taginterface[]>(`${this.localhost}/users/gettagdetails`,this.httpOptions)
  }
  getuser():Observable<userinterface>{
    return this.http.get(`${this.localhost}/users/getuser`,this.httpOptions)
  }

  getpost():Observable<addpostinterface>{
    return this.http.get(`${this.localhost}/users/getpostdetails`,this.httpOptions)
  }

  getsingletag(id:string):Observable<taginterface>{
    return this.http.get(`${this.localhost}/users/getsingletag/${id}`,this.httpOptions)
  }
  getsinglepost(id:string):Observable<addpostinterface>{
    return this.http.get(`${this.localhost}/users/singlepost/${id}`,this.httpOptions)
  }
  forgotpass(email:string | undefined | null):Observable<Response>{
    return this.http.post(`${this.localhost}/users/forgotpass`,{email},this.httpOptions)
  }
  restpass(formData:resetpassinterface):Observable<Response>{
    return this.http.post(`${this.localhost}/users/resetpassword`,formData,this.httpOptions)
  }
  comments(id:string):Observable<Comments>{
    return this.http.post<Comments>(`${this.localhost}/users/comments`,{id},this.httpOptions)
  }
  addlike(id:string,value:boolean | undefined){
    return this.http.put(`${this.localhost}/users/addlike`,{id,value},this.httpOptions)
  }
  getlistcategory():Observable<listinterface[]>{
    return this.http.get<listinterface[]>(`${this.localhost}/users/getlistcate`,this.httpOptions)
  }
  addnewlist(formData:addlistinterface,tags:Array<string>,location:placeinterface){
    return this.http.post(`${this.localhost}/users/addnewlist`,{formData,tags,location},this.httpOptions)
  }
  getlist():Observable<addlistinterface[]>{
    return this.http.get<addlistinterface[]>(`${this.localhost}/users/getlist`,this.httpOptions)
  }
  gettagpost(id:string):Observable<addpostinterface>{
    return this.http.get(`${this.localhost}/users/gettagpost?id=${id}`,this.httpOptions)
  }
  report(id:string,formData:reportinterface):Observable<string>{
    return this.http.post<string>(`${this.localhost}/users/report`,{id,formData},this.httpOptions)
  }
  gettags():Observable<taginterface>{
    return this.http.get(`${this.localhost}/users/gettags`,this.httpOptions)
  }
  addreadlist(id:string):Observable<Object>{
    return this.http.post(`${this.localhost}/users/addreadlist`,{id},this.httpOptions)
  }
  getreadlist():Observable<Object>{
    return this.http.get(`${this.localhost}/users/getreadlist`,this.httpOptions)
  }

  removereadlist(id:string):Observable<Object>{      
    return this.http.delete(`${this.localhost}/users/removereadlist/${id}`,this.httpOptions)
  }
  updateBio(form:userinterface):Observable<Response>{   
    return this.http.put(`${this.localhost}/users/updatebio`,{form},this.httpOptions)
  }

  userlist():Observable<addlistinterface[]>{      
    return this.http.get<addlistinterface[]>(`${this.localhost}/users/userlist`,this.httpOptions)
  }

  deletelist(id:string| null | undefined):Observable<{success:string}>{      
    return this.http.delete<{success:string}>(`${this.localhost}/users/deletelist/${id}`,this.httpOptions)
  }

  editList(id:string | null | undefined):Observable<addlistinterface[]>{     
    return this.http.get<addlistinterface[]>(`${this.localhost}/users/editlist/${id}`,this.httpOptions)
  }

  updateList(list:addlistinterface):Observable<Response>{     
    return this.http.put(`${this.localhost}/users/updateList`,list,this.httpOptions)
  }

  getusers():Observable<signupinterface[]>{     
    return this.http.get<signupinterface[]>(`${this.localhost}/users/getusers`,this.httpOptions)
  }
  chatroom(id:String | undefined){     
    return this.http.get(`${this.localhost}/users/chatroom/${id}`,this.httpOptions)
  }

  chatmessage(id:string | null | undefined){     
    return this.http.get(`${this.localhost}/users/chatmessage/${id}`,this.httpOptions)
  }

  getuserpost():Observable<addpostinterface>{     
    return this.http.get(`${this.localhost}/users/getuserpost`,this.httpOptions)
  }

  deletepost(id:string| null | undefined){      
    return this.http.delete(`${this.localhost}/users/deletepost/${id}`,this.httpOptions)
  }

  deletecomment(id:string| null | undefined){          
    return this.http.delete(`${this.localhost}/users/deletecomment/${id}`,this.httpOptions)
  }
  blockStatus(){     
    return this.http.get(`${this.localhost}/users/blockStatus`,this.httpOptions)
  }
  singlelist(id:string):Observable<listinterface>{
    return this.http.get(`${this.localhost}/users/singlelist/${id}`,this.httpOptions)
  }
  passwordcheck(formdata:resetpassinterface):Observable<{success?:string | null,Error?:string}>{
    return this.http.post(`${this.localhost}/users/passwordcheck`,{formdata},this.httpOptions)
  }
  updateproimg(formdata:FormData,id:String | undefined){
    return this.http.post(`${this.localhost}/users/updateproimg/${id}`,formdata,)
  }
}
