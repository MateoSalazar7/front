import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUsuario, ObjetoUsuario } from 'src/app/clases/usuario/usuario';
import { LoginService } from 'src/app/servicios/login.service.spec';



@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  formulario = new FormGroup({
    correo: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required),
  })

  //Objeto grupo
  Usuario: ObjetoUsuario[]=[];
  listagrupos: ObjetoUsuario[]=[];

  constructor(private Servicio_Login: LoginService, private formBuilder:FormBuilder) { }
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
}
