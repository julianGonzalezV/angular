import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file.item';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private IMAGE_FOLDER = 'images';

  constructor( private db: AngularFirestore ) { }

  private saveImage( img: {name: string, url: string} ) {
    console.log('va a guardar', img);
    this.db.collection(`/${this.IMAGE_FOLDER}`)
    .add( img );
  }

  loadImagesFirebase( imagenes: FileItem[] ) {
      const sotrageRef = firebase.storage().ref();
      for ( const item of imagenes ) {
        item.isUploading = true;
        if (item.progress >= 100) {
          // pasa a la siguiente iteración
          continue;

        }

        const uploadTask: firebase.storage.UploadTask =  sotrageRef.child(`/${this.IMAGE_FOLDER}/${item.fileName}`)
        .put( item.file );

        // Que se dispare cuando el estado cambie
        uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,          
          ( snapshot: firebase.storage.UploadTaskSnapshot ) => {
            // Este código se ejecuta Cuando el proceso de carga va ok
             console.log( 'calculando progreso', ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100 );
            item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
          },
          ( error ) => console.log( 'error subiendo archivo', error ), // en caso de error, conexión etc
          // en caso de que realice todo correctamente
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((result) => {
              console.log(' la url es', result);
              item.urlImage = result;
              item.isUploading = false;
              this.saveImage( {name : item.fileName, url : item.urlImage} );
            }).catch((err) => {
              console.log('error obteniendo la url');
            });
           
          }
        );
      }
  }

 
}
