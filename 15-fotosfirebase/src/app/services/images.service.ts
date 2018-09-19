import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file.item';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private IMAGE_FOLDER = 'img';

  constructor( private db: AngularFirestore ) { }

  private saveImage( img: {name: string, urñ: string} ) {
    this.db.collection(`/${this.IMAGE_FOLDER}`)
    .add( img );
  }

  loadImagesFirebase( imagenes: FileItem[] ) {
      console.log(imagenes);
  }
}
