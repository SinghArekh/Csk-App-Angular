import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../Models/team';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(inputData: Team[], args: string): Team[] {
    if(args == "")
      return inputData
    else
      return inputData.filter((t) => t.role.includes(args))
  }

}