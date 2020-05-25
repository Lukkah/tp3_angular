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
    this.palabras.push(new Palabra("lion","leon","./../../assets/img/pal1.jpg"));
    this.palabras.push(new Palabra("cat","gato","./../../assets/img/pal2.jpg"));
    this.palabras.push(new Palabra("dog","perro","./../../assets/img/pal3.jpg"));
    this.palabras.push(new Palabra("elefant","elefante","./../../assets/img/pal4.jpg"));
    this.palabras.push(new Palabra("shark","tiburon","./../../assets/img/pal5.jpg"));
    this.palabras.push(new Palabra("dolphin","delfin","./../../assets/img/pal6.jpg"));
    }else if(categoria==2){
    this.palabras.push(new Palabra("pen","lapiz","./../../assets/img/pal7.jpg"));
    this.palabras.push(new Palabra("eraser","borrador","./../../assets/img/pal8.jpg"));
    this.palabras.push(new Palabra("backpack","mochila","./../../assets/img/pal9.jpg"));
    this.palabras.push(new Palabra("ruler","regla","./../../assets/img/pal10.jpg"));
    this.palabras.push(new Palabra("pencil","lapicera","./../../assets/img/pal11.jpg"));
    this.palabras.push(new Palabra("glue","pegamento","./../../assets/img/pal12.jpg"));
    }else if(categoria==3){
    this.palabras.push(new Palabra("star","estrella","./../../assets/img/pal13.jpg"));
    this.palabras.push(new Palabra("tree","arbol","./../../assets/img/pal14.jpg"));
    this.palabras.push(new Palabra("gift","regalo","./../../assets/img/pal15.jpg"));
    this.palabras.push(new Palabra("sled","trineo","./../../assets/img/pal16.jpg"));
    this.palabras.push(new Palabra("snow","nieve","./../../assets/img/pal17.jpg"));
    this.palabras.push(new Palabra("reinder","reno","./../../assets/img/pal18.jpg"));
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
}