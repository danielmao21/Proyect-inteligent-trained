import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'productos', component: ProductosComponent },
  {path:'producto/:id',component: ProductoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
