import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ObjetoProducto, CrearProducto } from '../../clases/producto/producto';
import { ProductoService } from '../../servicios/producto/producto.service';
import { Router } from '@angular/router';
import { EnvioDataService } from '../../servicios/envioData/envio-data.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  formulario: FormGroup;
  //Objeto Grupo

Producto: ObjetoProducto[]=[];
listarproductos: ObjetoProducto[]=[];

constructor(private  ProductoService: ProductoService, private formBuilder:FormBuilder, private obtenerData:EnvioDataService, private router:Router){ 
  this.formulario = this.formBuilder.group({
  nombre_producto: new FormControl ('',Validators.required),
  descripcion: new FormControl('',Validators.required),
  valor_venta: new FormControl('',Validators.required),
  cantidad_stock: new FormControl('', Validators.required),
  Id_Categoria: new FormControl('', Validators.required)},)
}


ngOnInit(): void {
  //throw new Error('Method not implemented.');
  // this.ProductoService.getAll().subscribe(response=>{
  //   this.listarproductos=response.nombre_producto;
  // })
}

registrar_producto(){
    console.log("Estoy dentro de registro producto")
    const producto:CrearProducto={
      nombre_producto:this.obtenerData.obtenerProducto(),
      descripcion:this.formulario.value.descripcion,
      valor_venta:this.formulario.value.valor_venta,
      cantidad_stock:this.formulario.value.cantidad_stock,
      Id_Categoria:this.formulario.value.Id_Categoria
    }

    console.log("Va a disparar el servicio");
    console.log(producto);
    this.ProductoService.create(producto).subscribe({
      next:()=>{
        alert("Producto Registrado")
      },
      error:()=>{
        alert("Producto no Registrado")
      }
    })

  }
}
