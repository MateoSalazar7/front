import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './agregar/agregar.component';
import { AgregarProductoComponent } from './agregar/agregar-producto/agregar-producto.component';
import { AgregarEmpleadoComponent } from './agregar/agregar-empleado/agregar-empleado.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ActualizarProductoComponent } from './actualizar/actualizar-producto/actualizar-producto.component';
import { ActualizarEmpleadoComponent } from './actualizar/actualizar-empleado/actualizar-empleado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { LoginComponent } from './usuario/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistroService } from './servicios/registro.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    AgregarProductoComponent,
    AgregarEmpleadoComponent,
    ActualizarComponent,
    ActualizarProductoComponent,
    ActualizarEmpleadoComponent,
    UsuarioComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [RouterModule, RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
