import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { JuegoSService } from 'src/app/services/juego-s.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  palabra:Palabra;
  palabras:Array<Palabra>;
  categoria:number;

  numPalabra:number=0;
  vidas:number=6;
  puntos:number=0;

  abecedario=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  juegoService:JuegoSService;


  palabraAux:Array<string>;
  letraAux:string;
  acierto:boolean=false;
  constructor() { 
    this.palabraAux=new Array<string>();    
    this.juegoService= new JuegoSService();
    this.palabra=new Palabra();
    this.palabras=new Array<Palabra>();
    this.palabra.nombreEspaniol="Sin elegir";
  }

  ngOnInit(): void {
  }

  public inicializarPalabras(){
    this.palabras=this.juegoService.cargarPalabras(this.categoria);
  }

  public seleccionarPalabra(){
    this.palabra=this.juegoService.seleccionarPalabra(this.palabras,this.numPalabra);
    this.iniciarPalabraAux();
  }

  public iniciarPalabraAux(){
    this.palabraAux=this.juegoService.iniciciarPalabraAux(this.palabra.nombreIngles);
  }

  public guardarLetra(l:string){
    this.acierto=false;
    this.letraAux=l.toUpperCase();
  }
  
  public compararLetras(letra:string){
    if(letra==this.letraAux){
      this.acierto=true;
    }
    else{
      this.vidas--;
    }
  }
}