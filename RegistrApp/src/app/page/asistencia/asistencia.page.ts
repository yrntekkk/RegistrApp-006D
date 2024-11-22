import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  // Lista de asistencias registradas
  asistencias = [
    { alumno: 'Juan Pérez', asignatura: 'Programación Móvil', fechaHora: '2024-11-22 10:30 AM' },
    { alumno: 'Ana López', asignatura: 'Arquitectura', fechaHora: '2024-11-22 11:00 AM' },
    { alumno: 'Carlos Martínez', asignatura: 'Inglés Elemental', fechaHora: '2024-11-22 11:30 AM' },
  ];

  constructor() {}

  // Método para obtener la lista de asistencias (puedes adaptarlo para conectarlo a una API)
  getAsistencias() {
    return this.asistencias;
  }
}
