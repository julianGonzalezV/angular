import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
ElementRef para hacer referencia al elemento al que se le aplica la directiva
HostListener para manejo de eventos eg Del mouse, pero hay más
Input para recibir parametros desde afuera
*/

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
//el nombre del input debe ser el mismo del de la directiva
@Input("appResaltado") nuevoColor:string;

  constructor(private elemR: ElementRef) { 
    console.log('se llama a ResaltadoDirective')
  }

  @HostListener('mouseenter') mouseEntra(){
    this.resaltar(this.nuevoColor || "red");
  }
  @HostListener('mouseleave') mouseSale(){
    this.resaltar(null);
  }

  private resaltar(color: string){
    this.elemR.nativeElement.style.backgroundColor = color;
  }

}
