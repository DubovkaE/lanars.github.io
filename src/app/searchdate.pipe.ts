import {Pipe} from '@angular/core';

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterArrayPipe {
  transform (value, searchT) {
    if (value == null) {
      return null;
    }
    if (value == '') {
      return null;
    }

    if(searchT !== undefined){
      return   value.filter(items => items.created_at.toLowerCase().indexOf(searchT.toLowerCase()) !== -1);
    }else{
      return value;
    }
  }
}
