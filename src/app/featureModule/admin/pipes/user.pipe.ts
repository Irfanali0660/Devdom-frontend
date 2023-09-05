import { Pipe, PipeTransform } from '@angular/core';
import { userinterface } from '../../user/interface/user';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(
    value:userinterface[], 
    arg:string,
    query: string): any[] {
    const regEx = new RegExp(query,'i');
    if(query==''){
      return value
    }else if(arg=='name'){    
      return value.filter((user)=>{
       return user.userName?.match(regEx) || user.email?.match(regEx)
      })
    }
    return [];
  }
}
