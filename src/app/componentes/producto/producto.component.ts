import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  Producto: any = {}
  

  constructor(
    private activeroute: ActivatedRoute,
    private _ProductosService: ProductosService
  ) {
    this.activeroute.params.subscribe(params => {
      console.log(params);
      
      this.Producto = this._ProductosService.getProductosByid(params['id']);
      console.log(this.Producto);
      
    });
  }

  ngOnInit(): void {

  }
}
