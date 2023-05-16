import { Pipe, PipeTransform } from '@angular/core';
import { addlistinterface } from '../interface/addlist';

@Pipe({
  name: 'list'
})
export class ListPipe implements PipeTransform {

  transform(value: addlistinterface[],query:string): addlistinterface[] {
    const regEx = new RegExp(query, 'i');
    if(query==''){
      console.log(value);
      return value
    }else{
      return value.filter((list)=>{
        return list?.title?.match(regEx) || list.tag?.includes(query)
       })
    }
    return [];
  }

}
