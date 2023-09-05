import { Pipe, PipeTransform } from '@angular/core';
import { userinterface } from '../interface/user';

@Pipe({
  name: 'chatUser'
})
export class ChatUserPipe implements PipeTransform {

  transform(
    user:userinterface[], 
    arg:string,
    query: string): userinterface[] {
    const regEx = new RegExp(query,'i');
    if(query==''){
      return user
    }else if(arg=='name'){    
      return user.filter((user)=>{
        
       return user.userName?.match(regEx) || user.email?.match(regEx)
      })
    }
    return [];
  }

}
