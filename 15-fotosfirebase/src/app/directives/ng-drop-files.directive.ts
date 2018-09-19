import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file.item';

/*
EventEmitter: comunicación directa con el padre
ElementRef: Comunicacion directa con el elemento html que contiene la directiva
HostListener: Crear eventos o callbacks cuando algo suceda, click, mouse, drag, 
Input: Recibir info desde el padre
Output: Muy similar al EventEmitter
*/

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  // lo que vamos a emitir hacia afuera o al padre es un booleano
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();


  @Input() files: FileItem[] = [];

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragOver( event: any ) {
    // cada vez que haya un over sobre el elemento entonces se cambia la bandera 
    this.mouseOver.emit( true );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    // cada vez que haya un over sobre el elemento entonces se cambia la bandera 
    this.mouseOver.emit( false );
  }


// cuando se suelta el mouse para dejar imagen
  @HostListener('drop', ['$event'])
  public onDrop( event: any ) {
    const transfer = this._getTransfer( event );
    if( !transfer ) {
      return;
    }

    this._extractFile( transfer.files );

    this._preventStop( event );

    this.mouseOver.emit( false );
  }

  // esto nos va a ayudar a la compatibilidad entre navegadores
  // es para extender la funcionalidad a todo, ya que hay navegadores que loexponen  event.dataTransfer
  // y otros event.originalEvent.dataTransfer
  private _getTransfer( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extractFile( fileList: FileList ) {
    for ( const property in Object.getOwnPropertyNames( fileList ) ) {
      const fileTemp = fileList[property];
    }
  }


  // Validaciones
  // 1) que el chrome no deje que abra la imagen cuando la sueltan
  private _preventStop( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  // 2) Valida que el archivo ya no haya sido asignado o adjuntado vía drag and drop
  private _fileDropped( fileName: string ): boolean {
    for( const file of this.files ) {
      if ( file.fileName === fileName ) {
        console.log('ya fué arrastrado', fileName);
        return true;
      }
    }

    return false;
  }


  // 3) verificar que lo que se arrastra sea una imagen
  private _isAnImage( tipo: string ): boolean {
    // en caso de ser un tipo  válido entonces se valida si es una imagen
    return ( tipo === '' || tipo === undefined ) ? false : tipo.startsWith('image');
  }

  // 4) verificar que lo que se arrastra sea una imagen
  private _canBeLoaded( file: File ): boolean {
    if( this._fileDropped( file.name ) && this._isAnImage(file.type ) ){
      return true;
    }

    return false;
  }


}
