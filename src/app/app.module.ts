import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { BusquedaClienteComponent } from './componentes/busqueda-cliente/busqueda-cliente.component';
import { RegisterClienteComponent } from './componentes/register-cliente/register-cliente.component';
import { InfoClienteComponent } from './componentes/info-cliente/info-cliente.component';
import { HambreServiceService } from './hambre-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    RegisterComponent,
    PedidoComponent,
    ModalComponent,
    BusquedaClienteComponent,
    RegisterClienteComponent,
    InfoClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HambreServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
