import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  ventas: Array<Pasaje>;
  constructor() {
    this.ventas = new Array<Pasaje>();
   }

  listarVenta(){
    return this.ventas;
  }

  guardarVenta(pasaje:Pasaje){
    this.ventas.push(pasaje)
  }
}
