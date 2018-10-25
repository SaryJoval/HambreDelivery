import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {PrivadoPageComponent} from './componentes/privado-page/privado-page.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';
import {RegisterComponent} from './componentes/register/register.component';
import {PedidoComponent} from './componentes/pedido/pedido.component';
import {BusquedaClienteComponent} from './componentes/busqueda-cliente/busqueda-cliente.component';
import {RegisterClienteComponent } from './componentes/register-cliente/register-cliente.component';
import {InfoClienteComponent} from './componentes/info-cliente/info-cliente.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'privado', component: PrivadoPageComponent},
  {path:'register', component: RegisterComponent},
  {path:'pedido', component: PedidoComponent},
  {path:'busquedaCliente', component: BusquedaClienteComponent},
  {path:'nuevoCliente', component: RegisterClienteComponent},
  {path:'infoCliente', component: InfoClienteComponent},
  {path:'**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
