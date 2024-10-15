import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { } // Declare and inject router in one step

  ngOnInit(): void {
  }

  buscar(criterios: string) {
    if (criterios.trim()) {
      this.router.navigate(['/busqueda', criterios]);
    }
  }


}
