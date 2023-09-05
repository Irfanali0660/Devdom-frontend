import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { listinterface } from 'src/app/featureModule/user/interface/list';
import { environment } from 'src/environments/environment';
import { Adlogin } from 'src/app/featureModule/admin/interfaces/adlogin';
import { Response } from 'src/app/featureModule/admin/interfaces/response';
import { Taginterface, taginterface } from 'src/app/featureModule/admin/interfaces/taginterface';
import { reportinterface } from 'src/app/featureModule/user/interface/report';
import { Addtags } from 'src/app/featureModule/admin/interfaces/addtags';
import { userinterface } from 'src/app/featureModule/user/interface/user';

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

  localhost=environment.socketUrl

  adminlogin(data:Adlogin) :Observable<Adlogin>{    
    return this.http.post(`${this.localhost}/admin/adminlogin`,data,this.httpOptions)
  }
  userData() :Observable<userinterface[]>{
    return this.http.get<userinterface[]>(`${this.localhost}/admin/users`,this.httpOptions)
  }
  status(id: string){
    return this.http.put(`${this.localhost}/admin/status/${id}`,this.httpOptions)
  }
  addtag(data:taginterface,file:File[]):Observable<Response>{
    let formData = new FormData()
    formData.append('image',file[0])
    for (const key in data) {
      formData.append(key,data[key])
    }
    return this.http.post(`${this.localhost}/admin/addtag`,formData)
  }
  edittag(data:Addtags,file:string):Observable<{success?:string | undefined,failed:string}>{
    let formData = new FormData()
    formData.append('image',file[0])
    for (const key in data) {
      formData.append(key,data[key])
    }
    return this.http.post<{success?:string | undefined,failed:string}>(`${this.localhost}/admin/edittag`,formData)
  }
  gettags() :Observable<taginterface>{
    return this.http.get(`${this.localhost}/admin/gettags`,this.httpOptions)
  }
  deletetag(id:string | number |undefined){
    return this.http.delete(`${this.localhost}/admin/deletetag/${id}`,this.httpOptions)
  }
  gettagDetails(id:string | number |undefined) :Observable<Taginterface>{
    return this.http.get<Taginterface>(`${this.localhost}/admin/tagdetails/${id}`,this.httpOptions)
  }
  addlist(list:listinterface) :Observable<listinterface>{
    return this.http.post(`${this.localhost}/admin/addlist`,list,this.httpOptions)
  }
  adgetlist():Observable<listinterface>{
    return this.http.get(`${this.localhost}/admin/adgetlist`,this.httpOptions)
  }
  liststatus(listid:string |undefined ):Observable<listinterface>{
    return this.http.post(`${this.localhost}/admin/liststatus`,{listid},this.httpOptions)
  }
  getreportpost():Observable<reportinterface>{
    return this.http.get(`${this.localhost}/admin/getreportedpost`,this.httpOptions)
  }
  deletepost(id:string){
    return this.http.delete(`${this.localhost}/admin/deletepost/${id}`,this.httpOptions)
  }
}
