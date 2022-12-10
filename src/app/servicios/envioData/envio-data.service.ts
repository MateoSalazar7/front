import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvioDataService {
    correo_usuario:String="";
    nombre_producto:String="";
  constructor() {
  this.correo_usuario
  this.nombre_producto
  }

  envioCorreo(correo:String){
    this.correo_usuario=correo
    console.log(this.correo_usuario);

  }

  obtenerCorreo(){
    console.log(this.correo_usuario);
    return this.correo_usuario
  }


  envioProducto(){
    console.log(this.nombre_producto);
    return this.nombre_producto
  }

  obtenerProducto(){
    console.log(this.nombre_producto);
    return this.nombre_producto
  }
}
