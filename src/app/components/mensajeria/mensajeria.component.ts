import { Component, OnInit } from '@angular/core';
import { Mensaje } from './../../models/mensaje';


@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {

  mensaje:Mensaje;
  tamMaxTexto:number = 120;
  tamTexto:number;

  textoAuxiliar:string;
  paraAuxiliar:number;
  fechaAuxiliar:Date;
  mensajes: Array<Mensaje>;
  constructor() {
      this.mensaje=new Mensaje();
      this.mensajes=new Array<Mensaje>();
   }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto=this.tamMaxTexto - this.mensaje.texto.length;
  }

  public enviarMensaje(){
    this.mensaje.fecha= new Date();
    this.guardarUltimosDatos();
    this.mensajes.push(this.mensaje);
    this.mensaje=new Mensaje();
  }

  reiniciarTamTexto(){
    this.tamTexto=120;
    this.mensaje=new Mensaje();
  }

  guardarUltimosDatos(){
    this.textoAuxiliar=this.mensaje.texto;
    this.paraAuxiliar=this.mensaje.para;
    this.fechaAuxiliar=this.mensaje.fecha;
  }
}
