import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { actualizarProducto, ObjetoProducto } from '../../clases/producto/producto';
import { ProductoService } from '../../servicios/producto/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {

  formulario = new FormGroup({
    id_producto: new FormControl ('',Validators.required),
    nombre_producto: new FormControl ('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    valor_venta: new FormControl('',Validators.required),
    cantidad_stock: new FormControl('', Validators.required),
    Id_Categoria: new FormControl('',Validators.required),
  })

  Producto: ObjetoProducto[]=[];
  listarproductos: actualizarProducto[]=[];

  constructor(private ProductoService: ProductoService, private formBuilder:FormBuilder, private router:Router){ }

  actualizar_producto(form:any){
    console.log("Estoy dentro de actualizar productos")
    const producto:actualizarProducto={
      Id_Producto:form.Id_Producto,
      nombre_producto:form.nombre_producto,
      descripcion:form.descripcion,
      valor_venta:form.valor_venta,
      cantidad_stock:form.cantidad_stock,
      Id_Categoria:form.Id_Categoria
    }

    console.log("Va a disparar el servicio");
    this.ProductoService.create(producto).subscribe({
      next:()=>{
        alert("Producto Actualizado")
      },
      error:()=>{
        alert("Producto no Actualizado")
      }

    })

  }
}
