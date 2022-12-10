export interface ObjetoProducto{
    Id_Producto:String;
    nombre_producto:String ;
    descripcion:String;
    valor_venta:String;
    cantidad_stock:String;
    Id_Categoria:String;
   }

export interface ListarProducto{
    Id_Producto:String;
    nombre_producto:String ;
    descripcion:String;
    valor_venta:String;
    cantidad_stock:String;
    Id_Categoria:String;
   }  

   export interface CrearProducto{
     nombre_producto:String;
     descripcion:String;
     valor_venta:String;
     cantidad_stock:String;
     Id_Categoria:String;
    }

    export interface actualizarProducto{
     Id_Producto:String;
     nombre_producto:String;
     descripcion:String;
     valor_venta:String;
     cantidad_stock:String;
     Id_Categoria:String;
    }

    export interface Respuestaproducto{
      nombre_producto:ObjetoProducto[];
    }
