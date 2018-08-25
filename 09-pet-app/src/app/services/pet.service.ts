
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Pet } from '../interfaces/pet.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PetService {
/*con clud fireStore
  urlFireBase = "https://firestore.googleapis.com/v1beta1/projects/pet-app1/databases/(default)/documents/pets?documentId=ikGHuznSXpl6goAvSRHO";
Pero al parecer cloud firestor ya brinda el acceso directo a la base de datos por medio de lambdas solo 
indicando elnombre de la coleccion , diría que sería algo así como hacer el back en nodeJs y exponer un rest a 
angular por que no se que tan recomendable sea acceder de una a la bd desde el front

  */
/*para eñ get esta funciona : 
https://firestore.googleapis.com/v1beta1/projects/pet-app1/databases/(default)/documents/pets
*/

//Esta rta es con real time database y NO con clud firestore
urlFireBase = "https://pet-app1.firebaseio.com/pets.json";
urlFireBasePet = "https://pet-app1.firebaseio.com/pets";

  constructor(private http: Http) { }


  newRecord( pet: Pet ) {
    //let body = '{"fields":' + JSON.stringify( pet ) + '}' ;

    let body = JSON.stringify( pet ) ;

    console.log('newRecord stringify', body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });


    return this.http.post( this.urlFireBase, body, {headers: headers} )
    .pipe( map( res => {
      console.log('rest save', res.json());
      return res.json();
    }));
  }


  updateRecord( pet: Pet, key$: string) {
    let body = JSON.stringify( pet ) ;

    console.log('newRecord stringify', body);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });


    return this.http.put(`${this.urlFireBasePet}/${key$}.json`, body, {headers: headers} )
    .pipe( map( res => {
      console.log('rest put', res.json());
      return res.json();
    }));
  }

  getRecord( key$: string) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.urlFireBasePet}/${key$}.json`, {headers: headers} )
    .pipe( map( res => {
      console.log('rest get', res.json());
      return res.json();
    }));
  }

  getRecordList() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.urlFireBase, {headers: headers} )
    .pipe( map( res => {
      console.log('rest get list', res.json());
      return res.json();
    }));
  }


  deleteRecord( key$: string) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.urlFireBasePet}/${key$}.json`, {headers: headers} )
    .pipe( map( res => {
      console.log('rest delete', res.json());
      return res.json();
    }));
  }
}
