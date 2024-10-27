import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {
  asignaturas = [
    { title: 'Programacion Movil' },
    { title: 'Arquitectura' },
    { title: 'Ingles Elemental' },
    { title: 'Programacion Base de Datos' },
    { title: 'Desarrollo de Software' }
  ];
  constructor(private router: Router) {}

  // Este es el método que se llama en el HTML
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
