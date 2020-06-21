import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asistente } from '../models/asistente';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursoService {

  direccion: string = "http://localhost:3000/api/asistente/";

  constructor(private _http:HttpClient) { }


  getAsistentes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.get(this.direccion,httpOptions);
  }

  addAsistente(asistente:Asistente):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(asistente);
    return this._http.post(this.direccion,body,httpOptions);
  }

  deleteAsistente(asistente:Asistente):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.direccion+asistente._id,httpOptions);
  }

  editAsistente(asistente:Asistente):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(asistente);
    return this._http.put(this.direccion+asistente._id,body,httpOptions);
  }

}
