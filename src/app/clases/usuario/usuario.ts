export interface ObjetoUsuario{
    Id_Usuario:String;
    nombre_usuario:String ;
    correo:String;
    clave:String;
    rol: String;
   }

   export interface CrearUsuario{
     nombre_usuario:String;
     correo:String;
     clave:String;
    }


    export interface LoginUsuario{
      correo:String;
      clave:String;
    }
