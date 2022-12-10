import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ObjetoUsuario } from 'src/app/clases/usuario/usuario';
import { LoginService } from '../../servicios/login.service.spec';
import { LoginUsuario } from '../../clases/usuario/usuario';
import { Router } from '@angular/router';
import { EnvioDataService } from 'src/app/servicios/envioData/envio-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formulario:FormGroup;
  usuario:any=""
  nombre_usuario:any=""
  constructor(public formularios:FormBuilder,private loginService:LoginService,private envioData:EnvioDataService, private router:Router) {
      this.formulario=this.formularios.group({
        correo:[''],
        clave:[''],
      });

     }

  ngOnInit(): void {
  }

  // ingresar(formulario:any):any{
  //   console.log(formulario)
  //   this.loginService.inicioSesion(this.formulario.value).subscribe(
  //       (data) => {
  //         this.usuario=data.usuario
  //         console.log(this.usuario)
  //         this.nombre_usuario=data.nombre_usuario
  //         if(this.usuario=="usuario"){
  //           this.router.navigateByUrl('agregarproducto')
  //           console.log(data.correo)
  //           this.envioData.envioCorreo(data.correo)
  //         }else{
  //           if(this.usuario=="usuario") {
  //             this.router.navigateByUrl('agregarproducto')
  //           }else {
  //             alert("Usuario no identificado")
  //             this.router.navigateByUrl('login')
  //           }
  //         }
  //       },
  //        (error) => {
  //         // Si hubo un error dentro del registro del usuario
  //         alert("Contrasena Incorrecta o Usuario no registrado")
  //     }
  //   )

   /* Capturar datos del formulario registro */

//    formulario = new FormGroup({
//     correo: new FormControl('',Validators.required),
//     clave: new FormControl('',Validators.required),
//   })

//   //Objeto grupo
//   Usuario: ObjetoUsuario[]=[];
//   listagrupos: ObjetoUsuario[]=[];

//   constructor(private Servicio_Login: LoginService, private formBuilder:FormBuilder) { }
//   ngOnInit(): void {

//   }

// /*   escuchandogrupos(){
//     this.servicio_grupo.getAll().subscribe(response=>{
//       this.listagrupos=response.cursos;
//   })
//     }
//  */

//     Registrar_usuario(form:any){
//       console.log("Estoy adentro de login usuario")
//       const usuario: LoginUsuario={
//         correo:form.correo,
//         clave:form.clave,
//       }

//       console.log("Va a disparar el servicio");
//       this.Servicio_Login.create(usuario).subscribe({

//       })
//     }
}
