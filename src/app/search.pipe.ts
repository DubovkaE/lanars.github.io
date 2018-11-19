
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform (value, searchD) {
    if (value == null) {
      return null;
    }
    if (value == '') {
      return null;
    }

    if(searchD !== null){
      return   value.filter(items => items.title.toLowerCase().indexOf(searchD.toLowerCase()) !== -1);
    }else{
      return value;
    }
  }
}
