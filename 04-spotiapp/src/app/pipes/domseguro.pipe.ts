import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor (private _domSanitizer: DomSanitizer) {}

  transform(value: any): any {
    const  URL = 'https://open.spotify.com/embed?uri=';
    return this._domSanitizer.bypassSecurityTrustResourceUrl(URL + value);
  }

}
