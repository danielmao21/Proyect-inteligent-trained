import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductoTarjetaComponent } from './componentes/producto-tarjeta/producto-tarjeta.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';



@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    HeaderComponent,
    ContactoComponent,
    HomeComponent,
    ProductosComponent,
    ProductoTarjetaComponent,
    ProductoComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
