import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file.item';
import { ImagesService } from '../../services/images.service';



@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  isOverDrop = false;

  files: FileItem[] = [];

  constructor( public _is: ImagesService ) { }

  ngOnInit() {
  }


  loadImages() {
    this._is.loadImagesFirebase(this.files);
  }

  testOverElem( event ) {
    console.log(event);
  }

}
