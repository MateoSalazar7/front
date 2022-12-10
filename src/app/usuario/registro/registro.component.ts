import { FormGroup, Validators, FormBuilder, Form, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Objetos y clases

import { ObjetoUsuario, CrearUsuario } from 'src/app/clases/usuario/usuario';
import { RegistroService } from 'src/app/servicios/registro.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{

formulario: FormGroup;

  //Objeto grupo
  Usuario: ObjetoUsuario[]=[];
  listagrupos: ObjetoUsuario[]=[];


 /* Capturar datos del formulario Grupos */
  constructor(private Servicio_Registro: RegistroService, private fb:FormBuilder, private router:Router) {
    this.formulario = this.fb.group({
        nombre_usuario: new FormControl ('',Validators.required),
        correo: new FormControl('',Validators.required),
        clave: new FormControl('',Validators.required),
    })
   }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

/*   escuchandogrupos(){
    this.servicio_grupo.getAll().subscribe(response=>{
      this.listagrupos=response.cursos;
  })
    }
 */
    Registrar_usuario(){
    console.log("Estoy adentro de registro usuario")
    const usuario: CrearUsuario={
      nombre_usuario:this.formulario.value.nombre_usuario,
      correo:this.formulario.value.correo,
      clave:this.formulario.value.clave
    }

    console.log("Va a disparar el servicio");
    this.Servicio_Registro.create(usuario).subscribe({
      next:()=>{
        alert("Usuario registrado")
      },
      error:()=>{
        alert("Usuario no registrado")
      }

    })

  }}
