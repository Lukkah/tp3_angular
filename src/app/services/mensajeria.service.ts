import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  direccion: string = "http://localhost:3000/api/mensaje/";

  constructor(private _http:HttpClient) { }


  getMensajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.get(this.direccion,httpOptions);
  }

  addMensaje(mensaje:Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(mensaje);
    return this._http.post(this.direccion,body,httpOptions);
  }

  deleteMensaje(mensaje:Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.direccion+mensaje._id,httpOptions);
  }

  editMensaje(mensaje:Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(mensaje);
    return this._http.put(this.direccion+mensaje._id,body,httpOptions);
  }



  getMensaje(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.get(this.direccion+id,httpOptions);
  }

}
