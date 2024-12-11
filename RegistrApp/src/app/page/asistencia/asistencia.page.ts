import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  // Lista para mostrar asistencias registradas
  asistencias: { asignatura: string; fechaHora: string }[] = [];

  constructor(private router: Router) {}

  // Navegación a otra página
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

  // Método para actualizar la tabla de asistencias desde localStorage
  ionViewWillEnter() {
    const savedAsistencias = localStorage.getItem('asistencias');
    this.asistencias = savedAsistencias ? JSON.parse(savedAsistencias) : [];
  }
}
