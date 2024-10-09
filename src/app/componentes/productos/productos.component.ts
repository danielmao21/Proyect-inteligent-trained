import { Component } from '@angular/core';
import { Producto, ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Producto []= [];
  constructor( private _productosservicio: ProductosService){
   
  }

  ngOnInit(): void {
    this.productos = this._productosservicio.getProductos();
    console.log(this.productos);
    
  }
}
