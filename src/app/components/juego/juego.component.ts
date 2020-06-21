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
  categoria:number;
  vidas:number;
  puntos:number;
  palabras:Array<Palabra>;

  palabraUsuario:Array<string>;
  palabraIngles:Array<string>;

  indicePalabraActual:number;
  longPalabraActual:number;
  letra0:string;
  letra1:string;
  letra2:string;
  letra3:string;
  letra4:string;
  letra5:string;
  letra6:string;
  letra7:string;

  juegoService:JuegoSService;

  constructor() {   
    this.juegoService= new JuegoSService();
    this.palabra=new Palabra();
    this.palabra.nombreEspaniol="Sin elegir";
  }

  ngOnInit(): void {
  }


  public seleccionarPalabra(){
    this.vidas=6;
    this.puntos=0;
    
    this.indicePalabraActual=0;
    this.palabra=this.juegoService.seleccionarPalabra(this.palabras,this.indicePalabraActual);
    this.longPalabraActual=this.palabra.nombreIngles.length;
    this.prepararPalabra();
    
  }
  public cambiarPalabra(){
    this.letra0="";
    this.letra1="";
    this.letra2="";
    this.letra3="";
    this.letra4="";
    this.letra5="";
    this.letra6="";
    this.letra7="";
    this.palabra=this.juegoService.seleccionarPalabra(this.palabras,this.indicePalabraActual);
    this.longPalabraActual=this.palabra.nombreIngles.length;
    this.prepararPalabra();
  }

  public prepararPalabra(){
    this.palabraIngles = this.palabra.nombreIngles.split("");
    var palabraAux = this.palabra.nombreIngles;
    palabraAux = palabraAux.replace(/./gi,' ');
    this.palabraUsuario = palabraAux.split("");
    
    this.indicePalabraActual=this.indicePalabraActual+1;
  }

  public ingresarLetra(){
    this.palabraUsuario[0]=this.letra0;
    this.palabraUsuario[1]=this.letra1;
    this.palabraUsuario[2]=this.letra2;
    this.palabraUsuario[3]=this.letra3;
    this.palabraUsuario[4]=this.letra4;
    this.palabraUsuario[5]=this.letra5;
    this.palabraUsuario[6]=this.letra6;
    this.palabraUsuario[7]=this.letra7;
    if(this.palabraUsuario.join("").toLocaleLowerCase()==this.palabraIngles.join("")){
      this.cambiarPalabra();
      this.puntos++;
    }
  }

  
  public restarVida(num:number,letra:string){
    
    if(this.palabraIngles[num]!=letra.toLocaleLowerCase() && letra!=""){
      this.vidas--;
    }
    if(this.vidas==0){
      alert("Game Over");
      this.seleccionarPalabra();
    }
  }
  
  public inicializarPalabras(){
    

    this.letra0="";
    this.letra1="";
    this.letra2="";
    this.letra3="";
    this.letra4="";
    this.letra5="";
    this.letra6="";
    this.letra7="";
    this.palabras=new Array<Palabra>();
    this.palabras=null;
    this.palabras=this.juegoService.cargarPalabras(this.categoria);
  }
}