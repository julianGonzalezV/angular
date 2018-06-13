import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): any {
    console.log("Entra a ContrasenaPipe ", value);
    if(activar){
      //let myRegex = /[A-Z] [a-z]/
      let myRegex = /\w/g;
      return value.replace(myRegex,"*");       
    }else{
      return value;
    }
    
  }

}
