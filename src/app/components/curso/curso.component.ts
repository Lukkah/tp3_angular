import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  asistente:Asistente;
  asistentes: Array<Asistente>;
  constancia:string;
  constructor() { 
    this.asistente=new Asistente();
    this.asistentes=new Array<Asistente>();
  }

  ngOnInit(): void {
  }

  agregarAsistente(){
    this.asistentes.push(this.asistente);
    this.asistente=new Asistente();
  }


  const(e){
    this.asistente.solicitaConstancia=e.target.checked;
  }
}
