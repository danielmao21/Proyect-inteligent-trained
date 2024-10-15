import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  @Input() producto: any = {
  }


  @Input() index!: Number;



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.producto);
  }

  verproducto() {

    console.log(this.index);
    this.router.navigate(['/producto', this.index])

  }
}
