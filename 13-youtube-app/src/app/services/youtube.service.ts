import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private urlBase = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBDOR9z-k93b0ek4_INbOKEqIWF3VnLYJY';
  private playlistId = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = "";
  //playlistItems , nextPageToken CAoQAA
  constructor(private _http: Http) { }

  getPlayListItems() {
    const url = `${ this.urlBase }/playlistItems`;
    let parameters = new URLSearchParams();
    parameters.set('part', 'snippet');
    parameters.set('maxResults', '10');
    parameters.set('playlistId', this.playlistId);
    parameters.set('key', this.apiKey);

    if( this.nextPageToken ) {
      parameters.set('pageToken', this.nextPageToken);
    }

    return this._http.get( url, { search: parameters } ).pipe(map( res => {
      this.nextPageToken = res.json().nextPageToken;
      // los snipped son los videos que se ha cargado al canal
      let videos = res.json().items.map( x => x.snippet );
      return videos;
    }));
  }
}
