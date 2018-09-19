import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';

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

}
