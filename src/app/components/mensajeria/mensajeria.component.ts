import { Component, OnInit } from '@angular/core';
import { Mensaje } from './../../models/mensaje';
import { MensajeriaService } from 'src/app/services/mensajeria.service';
import { ServicioEmpresaService } from 'src/app/services/servicio-empresa.service';
import { Empresa } from 'src/app/models/empresa';


@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {
  mensaje:Mensaje;
  mensaje2:Mensaje;
  tamMaxTexto:number = 200;
  tamTexto:number;

  auxPara:number;
  auxFecha:Date;
  auxTexto:string;
  
  ultimo:string;
  mensajes:Array<Mensaje>;
  empresas: Array<Empresa>;
  constructor(private mensajeria:MensajeriaService,private empresaServicio:ServicioEmpresaService) {
      this.mensaje=new Mensaje();
      this.mensaje2 = new Mensaje();
      this.obtenerEmpresas();
   }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto=this.tamMaxTexto - this.mensaje.texto.length;
  }


  reiniciarTamTexto(){
    this.tamTexto=120;
    //this.obtenerMensaje(this.mensaje._id);
    this.mensaje=new Mensaje();
  }

  

  enviarMensaje(){
    this.mensaje._id=null;
    this.mensaje.fecha=new Date();

    this.auxFecha=this.mensaje.fecha;
    this.auxPara=this.mensaje.para;
    this.auxTexto=this.mensaje.texto;

    this.mensajeria.addMensaje(this.mensaje).subscribe(
      (result) =>{
        alert("Mensaje Enviado");
      },
      (error) =>{
        alert("No se pudo enviar mensaje")
        console.log(error);
      }
    )
  }
  
  obtenerEmpresas(){
    this.empresas = new Array<Empresa>();
    this.empresaServicio.getEmpresas().subscribe(
      (result) =>{
        var empresa: Empresa = new Empresa();
        result.forEach(element => {
          Object.assign(empresa,element);
          this.empresas.push(empresa);
          empresa = new Empresa();
        });
      },
      (error) =>{
        alert("No se pudo obtener Empresas")
        console.log(error);
      }
    )
  }
  
  /*
  obtenerMensaje(id:string){
    this.mensajeria.getMensajes().subscribe(
      (result) =>{
          Object.assign(this.mensaje2,result[1]);
      },
      (error) =>{
        alert("No se pudo obtener mensaje")
        console.log(error);
      }
    )
  }*/
}
