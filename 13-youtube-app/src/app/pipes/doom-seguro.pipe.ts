import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'doomSeguro'
})
export class DoomSeguroPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {}

  transform(videoId: string): any {
    const url = 'https://www.youtube.com/embed/';
    var v1 = this._domSanitizer.bypassSecurityTrustResourceUrl(url + videoId );
    console.log('va por el video ',v1 );
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + videoId );
  }

}
