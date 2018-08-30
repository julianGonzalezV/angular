import { Pipe, PipeTransform } from '@angular/core';


//pure: false : es para que esté pendiende del ciclo de cambios realizados por angular
@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  //el valor es el objeto que tiene todas las llaves
  transform(value: any): any {
    let keys = []

    //va a se un arreglo de llaves
    for(let k in value){
      keys.push(k);
    }
    return keys;
  }

}
