import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente'
import { ServicioCursoService } from 'src/app/services/servicio-curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  check:boolean=true;
  idAux:string;
  asistente:Asistente;
  asistentes: Array<Asistente>;
  constancia:string;
  constructor(private servicioAsistente:ServicioCursoService) { 
    this.asistente=new Asistente();
    this.asistentes=new Array<Asistente>();
    this.obtenerAsistentes();
  }

  ngOnInit(): void {
  }

  agregarAsistente(){
    this.asistente._id=null;
    this.asistente.solicitaConstancia=this.check;
    this.servicioAsistente.addAsistente(this.asistente).subscribe(
      (result) =>{
        alert("Asistente Registrado")
      },
      (error) =>{
        alert("No se pudo registrar asistente")
        console.log(error);
      }
    )
    this.obtenerAsistentes();
    this.asistente=new Asistente();

  }

  obtenerAsistentes(){
    this.asistentes = new Array<Asistente>();
    this.servicioAsistente.getAsistentes().subscribe(
      (result) =>{
        var asistente: Asistente = new Asistente();
        result.forEach(element => {
          Object.assign(asistente,element);
          this.asistentes.push(asistente);
          asistente = new Asistente();
        });
      },
      (error) =>{
        alert("No se pudo obtener asistentes")
        console.log(error);
      }
    )
  }

  eliminarAsistente(asistente:Asistente){
    this.servicioAsistente.deleteAsistente(asistente).subscribe(
      (result) =>{
        alert("Asistente eliminado")
      },
      (error) =>{
        alert("No se pudo eliminar asistente")
        console.log(error);
      }
    )
    this.obtenerAsistentes();
    this.asistente=new Asistente();
  }

  modificarAsistente(){
    this.asistente.solicitaConstancia=this.check;
    this.servicioAsistente.editAsistente(this.asistente).subscribe(
      (result) =>{
        alert("Asistente modificado")
      },
      (error) =>{
        alert("No se pudo modificar asistente")
        console.log(error);
      }
    )
    this.obtenerAsistentes();
    this.asistente=new Asistente();
  }

  const(e){
    if(e.target.checked==true)
      this.check=true;
    else
      this.check=false;
  }
}
