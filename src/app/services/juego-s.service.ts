import { Injectable } from '@angular/core';
import { Palabra } from './../models/palabra';


@Injectable({
  providedIn: 'root'
})
export class JuegoSService {
  palabras:Array<Palabra>;
  palabraArray:Array<string>;
  constructor() { 
    this.palabraArray= new Array<string>();
    this.palabras=new Array<Palabra>();
  }
  
  
  
  public cargarPalabras(categoria:number){
    if(categoria==1){
    this.palabras.push(new Palabra(1,"lion","leon","./../../assets/img/pal1.jpg"));
    this.palabras.push(new Palabra(2,"cat","gato","./../../assets/img/pal2.jpg"));
    this.palabras.push(new Palabra(3,"dog","perro","./../../assets/img/pal3.jpg"));
    this.palabras.push(new Palabra(4,"elefant","elefante","./../../assets/img/pal4.jpg"));
    this.palabras.push(new Palabra(5,"shark","tiburon","./../../assets/img/pal5.jpg"));
    this.palabras.push(new Palabra(6,"dolphin","delfin","./../../assets/img/pal6.jpg"));
    }else if(categoria==2){
    this.palabras.push(new Palabra(1,"pen","lapiz","./../../assets/img/pal7.jpg"));
    this.palabras.push(new Palabra(2,"eraser","borrador","./../../assets/img/pal8.jpg"));
    this.palabras.push(new Palabra(3,"backpack","mochila","./../../assets/img/pal9.jpg"));
    this.palabras.push(new Palabra(4,"ruler","regla","./../../assets/img/pal10.jpg"));
    this.palabras.push(new Palabra(5,"pencil","lapicera","./../../assets/img/pal11.jpg"));
    this.palabras.push(new Palabra(6,"glue","pegamento","./../../assets/img/pal12.jpg"));
    }else if(categoria==3){
    this.palabras.push(new Palabra(1,"star","estrella","./../../assets/img/pal13.jpg"));
    this.palabras.push(new Palabra(2,"tree","arbol","./../../assets/img/pal14.jpg"));
    this.palabras.push(new Palabra(3,"gift","regalo","./../../assets/img/pal15.jpg"));
    this.palabras.push(new Palabra(4,"sled","trineo","./../../assets/img/pal16.jpg"));
    this.palabras.push(new Palabra(5,"snow","nieve","./../../assets/img/pal17.jpg"));
    this.palabras.push(new Palabra(6,"reinder","reno","./../../assets/img/pal18.jpg"));
    }
    return this.palabras;
  }


  public seleccionarPalabra(palabras:Array<Palabra>,numPalabra:number){
    return palabras[numPalabra];
  }

  public iniciciarPalabraAux(palabraAux:string){
    for(var i=0 ;i<palabraAux.length;i++){
      this.palabraArray.push(palabraAux.charAt(i));
    }
    return this.palabraArray;
  }


  public comenzar(){
    
    this.palabraArray= new Array<string>();
    this.palabras=new Array<Palabra>();
  }
}