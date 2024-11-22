import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {
  result: string = '';
  
  // Lista de asignaturas con el formato solicitado
  asignaturas = [
    { 
      title: 'Programacion Movil', 
      codigo: 'PGY4121', 
      seccion: '012D', 
      sala: 'L9', 
      fecha: '20241104' 
    },
    { 
      title: 'Arquitectura', 
      codigo: 'ARC3001', 
      seccion: '101A', 
      sala: 'L5', 
      fecha: '20241106' 
    },
    { 
      title: 'Ingles Elemental', 
      codigo: 'ING2001', 
      seccion: '303B', 
      sala: 'L8', 
      fecha: '20241108' 
    },
    { 
      title: 'Programacion Base de Datos', 
      codigo: 'PBD5002', 
      seccion: '210C', 
      sala: 'L2', 
      fecha: '20241110' 
    },
    { 
      title: 'Desarrollo de Software', 
      codigo: 'DSW4003', 
      seccion: '401D', 
      sala: 'L3', 
      fecha: '20241112' 
    }
  ];

  // Registro de asistencias
  asistencias: { asignatura: string; fechaHora: string }[] = [];

  constructor(private router: Router) {}

  // Navegación a otra página
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

  // Escaneo de códigos QR
  async scan(): Promise<void> {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.ALL
      });

      if (result.ScanResult) {
        this.result = result.ScanResult;
        this.registrarAsistencia(this.result);
      }
    } catch (error) {
      console.error('Error al escanear el código:', error);
    }
  }

  // Registrar asistencia
  registrarAsistencia(qrData: string): void {
    // El QR debe tener el formato: <ASIGNATURA>|<SECCION>|<SALA>|<FECHA>
    const [codigo, seccion, sala, fecha] = qrData.split('|');

    // Buscar la asignatura en la lista
    const asignatura = this.asignaturas.find(a => a.codigo === codigo && a.seccion === seccion && a.sala === sala);

    if (asignatura) {
      // Registrar la asistencia con la fecha y hora actual
      const fechaHoraActual = new Date().toLocaleString();
      this.asistencias.push({ 
        asignatura: asignatura.title, 
        fechaHora: fechaHoraActual 
      });

      console.log('Asistencia registrada:', {
        asignatura: asignatura.title,
        fechaHora: fechaHoraActual
      });
    } else {
      console.warn('El QR escaneado no coincide con ninguna asignatura.');
    }
  }

  // Obtener lista de asistencias
  getAsistencias(): { asignatura: string; fechaHora: string }[] {
    return this.asistencias;
  }
}
