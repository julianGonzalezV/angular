import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: "capitalizado"
})
export class CapitalizadoPipe implements PipeTransform{
  transform(value: string, allCapital: boolean = true): string {
    value = value.toLowerCase();
    let names = value.split(" ");
    if(allCapital){
      return names.map(name => name[0].toUpperCase() + name.substring(1)).join(" ");
    }else{
      return value.substr(0,1).toUpperCase() + value.substring(1);
    }
  }
}