import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[] = [
    {
      nombre: "manzana postobon",
      descripcion: "jugo de manzana",
      img: "string",
      precio: 2800,
      categoria: "bebidas azucaradas",
      stock: 5,
      id: 232323,
    },
    {
      nombre: "colombiana",
      descripcion: "gaseosas colombiana",
      img: "string",
      precio: 2500,
      categoria: "bebidas azucaradas",
      stock: 3,
      id: 55435345,
    },
    {
      nombre: "pepsi ",
      descripcion: "jugo de manzana",
      img: "string",
      precio: 3000,
      categoria: "bebidas azucaradas",
      stock: 23,
      id: 43424,
    },
    {
      nombre: "cafe tostao ",
      descripcion: "cafe selecto",
      img: "string",
      precio: 8000,
      categoria: "alimentos",
      stock: 23,
      id: 423452,
    }, {
      nombre: "bretaña con alcohol",
      descripcion: "bebidas alcoholicas saborizada",
      img: "",
      precio: 8000,
      categoria: "bebida alcoholica",
      stock: 13,
      id: 423452,
    }, {
      nombre: "Andina",
      descripcion: "bebidas alcoholicas",
      img: "",
      precio: 4000,
      categoria: "bebida alcoholica",
      stock: 21,
      id: 32425,
    }

  ]
  constructor() { }

  getProductos() {
    return this.productos;
  }

  getProductosByid(id: number) {
    return this.productos[id];
  }

  buscarProducto(criterios: string) {
    criterios = criterios.toLowerCase();
    let productosFiltrados: Producto[] = [];
  
    for (let producto of this.productos) {
      const nombre = producto.nombre.toLowerCase();
      const descripcion = producto.descripcion.toLowerCase();
      const categoria = producto.categoria.toLowerCase();
      const precio = producto.precio.toString(); // Convertir el precio a string para la búsqueda
  
      // Compara los criterios con el nombre, la descripción, la categoría o el precio
      if (nombre.includes(criterios) || descripcion.includes(criterios) || categoria.includes(criterios) || precio.includes(criterios)) {
        productosFiltrados.push(producto);
      }
    }
  
    return productosFiltrados;
  }
  
}

export interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
  categoria: string;
  stock: number;
  id?: number;

}
