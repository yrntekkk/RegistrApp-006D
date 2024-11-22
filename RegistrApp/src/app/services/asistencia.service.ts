import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaService {
  private asistencias: any[] = [];

  constructor() {}

  // Método para registrar una asistencia
  registrarAsistencia(alumno: string, asignatura: string, fechaHora: string) {
    this.asistencias.push({ alumno, asignatura, fechaHora });
  }

  // Método para obtener todas las asistencias
  obtenerAsistencias() {
    return this.asistencias;
  }
}

