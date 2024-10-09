import { Component } from '@angular/core';

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
}
