
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjetoUsuario, CrearUsuario } from '../clases/usuario/usuario';

const baseUrl = 'http://127.0.0.1:5000';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  //Iniciamos en el constructor los metodos del HTTP
  constructor(private http:HttpClient) { }

  //Declaramos la funcion para realizar consultas al api
  getTodo(){
    let header= new HttpHeaders().set('Type-content','aplication/json')
    return this.http.get(baseUrl,{headers:header})
  }

  getAll(): Observable<ObjetoUsuario[]> {
    return this.http.get<ObjetoUsuario[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: CrearUsuario): Observable<any> {
    return this.http.post(`${baseUrl}/registrousuario`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
