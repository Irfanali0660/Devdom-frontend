import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(
    value:any[], 
    arg:string,
    query: string): any[] {
    const regEx = new RegExp(query,'i');
    if(query==''){
      return value
    }else if(arg=='name'){    
      return value.filter((user)=>{
       return user.userName.match(regEx) || user.email.match(regEx)
      })
    }
    return [];
  }
}
