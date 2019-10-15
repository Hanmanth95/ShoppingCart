import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    if(!value||!searchTerm)
    {
      return value;
    }
    else
    {
      return value.filter(x=>x.name.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1)
    }
  }

}
