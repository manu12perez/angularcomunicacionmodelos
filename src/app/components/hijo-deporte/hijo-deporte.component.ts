import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte',
  templateUrl: './hijo-deporte.component.html',
  styleUrl: './hijo-deporte.component.css'
})
export class HijoDeporteComponent {
  @Input() sport!: string;

  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  seleccionarFavoritoHijo(): void {
    //REALIZAMOS LA LLAMADA AL METODO PARENT
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
