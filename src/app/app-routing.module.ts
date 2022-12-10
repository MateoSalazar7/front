import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './actualizar/actualizar-producto/actualizar-producto.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ActualizarEmpleadoComponent } from './actualizar/actualizar-empleado/actualizar-empleado.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { LoginComponent } from './usuario/login/login.component';
import { AgregarComponent } from './agregar/agregar.component';
import { AgregarProductoComponent } from './agregar/agregar-producto/agregar-producto.component';
import { AgregarEmpleadoComponent } from './agregar/agregar-empleado/agregar-empleado.component';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'homeadmin', component:HomeAdminComponent},
  {path:'actualizar', component:ActualizarComponent},
  {path:'actualizarproducto', component:ActualizarProductoComponent},
  {path:'actualizarempleado', component:ActualizarEmpleadoComponent},
  {path:'registro', component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path:'agregar', component:AgregarComponent},
  {path:'agregarproducto', component:AgregarProductoComponent},
  {path:'agregarempleado', component:AgregarEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
