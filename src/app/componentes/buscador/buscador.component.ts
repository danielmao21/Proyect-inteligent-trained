import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  productos: any[] = []; // Cambia 'Producto' a 'productos' para almacenar múltiples resultados

  constructor(
    private activeroute: ActivatedRoute,
    private _ProductosService: ProductosService
  ) {
    this.activeroute.params.subscribe(params => {
      const criterios = params['criterios'];
      this.productos = this._ProductosService.buscarProducto(criterios);
    });
  }

  ngOnInit(): void { }
}
