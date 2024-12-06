import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  // Lista de asistencias por alumno
  asistencias = [
    { alumno: 'Juan Pérez', asignatura: 'Programación Móvil', fechaHora: '2024-11-22 10:30 AM' },
    { alumno: 'Ana López', asignatura: 'Arquitectura', fechaHora: '2024-11-22 11:00 AM' },
    { alumno: 'Carlos Martínez', asignatura: 'Inglés Elemental', fechaHora: '2024-11-22 11:30 AM' },
  ];

  // Lista de cursos con sus asistencias
  cursosAsistencias = [
    { curso: 'Arquitectura', clasesRegistradas: 32, asistencia: 23, porcentaje: 0.719 },
    { curso: 'Calidad De Software', clasesRegistradas: 14, asistencia: 12, porcentaje: 0.857 },
    { curso: 'Consultas De Bases De Datos', clasesRegistradas: 33, asistencia: 25, porcentaje: 0.758 },
    { curso: 'Diseño De Prototipos', clasesRegistradas: 14, asistencia: 11, porcentaje: 0.786 },
    { curso: 'Estadística Descriptiva', clasesRegistradas: 31, asistencia: 24, porcentaje: 0.774 },
    { curso: 'Ética Para El Trabajo', clasesRegistradas: 16, asistencia: 12, porcentaje: 0.75 },
    { curso: 'Inglés Intermedio', clasesRegistradas: 59, asistencia: 46, porcentaje: 0.78 },
    { curso: 'Proceso De Portafolio 4', clasesRegistradas: 4, asistencia: 3, porcentaje: 0.75 },
  ];

  constructor() {}

  // Métodos opcionales para cada lista
  getAsistencias() {
    return this.asistencias;
  }

  getCursosAsistencias() {
    return this.cursosAsistencias;
  }
}

