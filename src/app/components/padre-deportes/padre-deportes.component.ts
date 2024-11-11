import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje: string;

  //TENDREMOS UN METODO PARA PODER SELECCIONAR UN FAVORITO Y DIBUJARLO
  seleccionarFavoritoPadre(event: any): void {
    console.log("Dato: " + event);
    this.mensaje = event;
  }

  constructor() {
    this.deportes = ["Petacnca", "Curling", "Futbol", "Bolos", "Tenis"]
    this.mensaje = "";
  }
}
