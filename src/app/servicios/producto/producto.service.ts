import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjetoProducto, CrearProducto } from 'src/app/clases/producto/producto';
import { actualizarProducto } from '../../clases/producto/producto';

const baseUrl = 'http://127.0.0.1:5000';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Iniciamos en el constructor los metodos del HTTP
  constructor(private http:HttpClient) { }

  //Declaramos la funcion para realizar consultas al api
  getTodo(){
    let header= new HttpHeaders().set('Type-content','aplication/json')
    return this.http.get(baseUrl,{headers:header})
  }

  getAll(): Observable<ObjetoProducto[]> {
    return this.http.get<ObjetoProducto[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: CrearProducto): Observable<any> {
    return this.http.post(`${baseUrl}/registroproducto`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/actualizarproductos/<id_Producto>${id}`, data);
  }

  updateAll(): Observable<actualizarProducto[]> {
    return this.http.get<actualizarProducto[]>(baseUrl);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
