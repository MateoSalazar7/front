import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { actualizarProducto, ObjetoProducto } from 'src/app/clases/producto/producto';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit{
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /* formulario = new FormGroup({
    id_empleado: new FormControl ('',Validators.required),
    nombre_empleado: new FormControl ('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    valor_venta: new FormControl('',Validators.required),
    cantidad_stock: new FormControl('', Validators.required),
  })
  
  Producto: ObjetoProducto[]=[];
  listarproductos: ObjetoProducto[]=[];
  ProductoService: any;

  constructor(private formBuilder:FormBuilder, private router:Router){ }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  actualizar_producto(form:any){
    console.log("Estoy dentro de actualizar productos")
    const producto:actualizarProducto={
      Id_Producto:form.Id_Producto,
      nombre_producto:form.nombre_producto,
      descripcion:form.descripcion,
      valor_venta:form.valor_venta,
      cantidad_stock:form.cantidad_stock
    }

    console.log("Va a disparar el servicio");
    this.ProductoService.create(producto).subscribe({

    })
  } */
  
}
