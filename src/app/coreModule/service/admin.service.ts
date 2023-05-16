import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { taginterface } from 'src/app/featureModule/admin/interfaces/taginterface';
import { deletetag } from 'src/app/featureModule/admin/store/action';
import { listinterface } from 'src/app/featureModule/user/interface/list';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) {  }

  localhost='http://localhost:4000'

  adminlogin(data:any) :Observable<any>{
    return this.http.post(`${this.localhost}/admin/adminlogin`,data,this.httpOptions)
  }
  userData() :Observable<any>{
    return this.http.get(`${this.localhost}/admin/users`,this.httpOptions)
  }
  status(id: string):Observable<any>{
    return this.http.put(`${this.localhost}/admin/status/${id}`,this.httpOptions)
  }
  addtag(data:any,file:any):Observable<any>{

    
    // const body:any[]=[data,file]
    let formData = new FormData()
    formData.append('image',file[0])
    for (const key in data) {
      formData.append(key,data[key])
    }
    return this.http.post(`${this.localhost}/admin/addtag`,formData)
  }
  edittag(data:any,file:any):Observable<any>{
  
    
    // const body:any[]=[data,file]
    let formData = new FormData()
    formData.append('image',file[0])
    for (const key in data) {
      formData.append(key,data[key])
    }
    return this.http.post(`${this.localhost}/admin/edittag`,formData)
  }
  gettags() :Observable<any>{
    return this.http.get(`${this.localhost}/admin/gettags`,this.httpOptions)
  }
  deletetag(id:string) :Observable<any>{
    return this.http.delete(`${this.localhost}/admin/deletetag/${id}`,this.httpOptions)
  }
  gettagDetails(id:string) :Observable<any>{
    return this.http.get(`${this.localhost}/admin/tagdetails/${id}`,this.httpOptions)
  }
  addlist(list:listinterface) :Observable<any>{
    return this.http.post(`${this.localhost}/admin/addlist`,list,this.httpOptions)
  }
  adgetlist():Observable<any>{
    return this.http.get(`${this.localhost}/admin/adgetlist`,this.httpOptions)
  }
  liststatus(listid:string |undefined ):Observable<any>{
    return this.http.post(`${this.localhost}/admin/liststatus`,{listid},this.httpOptions)
  }
  getreportpost():Observable<any>{
    return this.http.get(`${this.localhost}/admin/getreportedpost`,this.httpOptions)
  }
  deletepost(id:string):Observable<any>{
    return this.http.delete(`${this.localhost}/admin/deletepost/${id}`,this.httpOptions)
  }
}
