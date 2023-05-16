import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatUser'
})
export class ChatUserPipe implements PipeTransform {

  transform(
    user:any[], 
    arg:string,
    query: string): any[] {
    const regEx = new RegExp(query,'i');
    if(query==''){
      return user
    }else if(arg=='name'){    
      return user.filter((user)=>{
       return user.userName.match(regEx) || user.email.match(regEx)
      })
    }
    return [];
  }

}
