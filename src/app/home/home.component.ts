import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario, ObjetoUsuario } from '../clases/usuario/usuario';
import { CerrarService } from '../servicios/cerrar_sesion/cerrar.service';
import { LoginService } from '../servicios/login.service.spec';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formulario = new FormGroup({
    correo: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required),
  })

  //Objeto grupo
  Usuario: ObjetoUsuario[]=[];
  listagrupos: ObjetoUsuario[]=[];

  constructor(private Servicio_Login: LoginService, private formBuilder:FormBuilder, private cerrra:CerrarService, private router:Router) { }
  ngOnInit(): void {

  }

/*   escuchandogrupos(){
    this.servicio_grupo.getAll().subscribe(response=>{
      this.listagrupos=response.cursos;
  })
    }
 */

    Registrar_usuario(form:any){
      console.log("Estoy adentro de login usuario")
      const usuario: LoginUsuario={
        correo:form.correo,
        clave:form.clave,
      }

      console.log("Va a disparar el servicio");
      this.Servicio_Login.create(usuario).subscribe({

      })
}

// Cerrar(){
//   this.cerrar.cerrarsesion().subscribe((data)=>{
//     if (data.exito) {
//       Swal.fire(
//         'Sesion cerrada'
//       )
//       this.router.navigateByUrl('login')
//     }else{
//       Swal.fire(
//         'No se cerro'
//       )
//     }
//   })
// }

}
