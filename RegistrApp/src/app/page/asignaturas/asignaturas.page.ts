// asignaturas.page.ts
import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  result: string = '';
  isSupported = false;
  barcodes: Barcode[] = [];

  // Lista de asignaturas con el formato solicitado
  asignaturas = [
    { title: 'Programacion Movil', codigo: 'PGY4121', seccion: '012D', sala: 'L9' },
    { title: 'Arquitectura', codigo: 'ARC3001', seccion: '101A', sala: 'L5' },
    { title: 'Ingles Elemental', codigo: 'ING2001', seccion: '303B', sala: 'L8' },
    { title: 'Programacion Base de Datos', codigo: 'PBD5002', seccion: '210C', sala: 'L2' },
    { title: 'Desarrollo de Software', codigo: 'DSW4003', seccion: '401D', sala: 'L3' },
  ];

  // Registro de asistencias
  asistencias: { asignatura: string; fechaHora: string }[] = [];

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {
    // Verificar si el escáner es soportado por el dispositivo
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  // Escaneo de códigos QR
  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert('Permiso denegado', 'Por favor, concede permisos para usar el escáner de códigos.');
      return;
    }

    try {
      const { barcodes } = await BarcodeScanner.scan();
      if (barcodes.length > 0) {
        this.result = barcodes[0].displayValue || '';
        this.registrarAsistencia(this.result);
      } else {
        console.warn('No se detectó ningún código QR.');
      }
    } catch (error) {
      console.error('Error al escanear el código:', error);
    }
  }

  // Registrar asistencia
  registrarAsistencia(qrData: string): void {
    const parts = qrData.split('|');
    if (parts.length !== 4) {
      this.presentAlert('Formato Incorrecto', 'El código QR no cumple con el formato esperado.');
      return;
    }

    const [codigo, seccion, sala, fecha] = parts;
    const asignatura = this.asignaturas.find((a) => a.codigo === codigo && a.seccion === seccion && a.sala === sala);

    if (asignatura) {
      const fechaHoraActual = new Date().toLocaleString();
      this.asistencias.push({ asignatura: asignatura.title, fechaHora: fechaHoraActual });

      // Guardar en localStorage
      localStorage.setItem('asistencias', JSON.stringify(this.asistencias));

      this.presentAlert('Registro Exitoso', `Asistencia registrada para ${asignatura.title}.`);
    } else {
      this.presentAlert('Asignatura no encontrada', 'El código QR escaneado no coincide con ninguna asignatura.');
    }
  }

  // Solicitar permisos para la cámara
  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  // Mostrar alerta
  async presentAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Navegación a otra página
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
  getAsistencias() {
    return this.asistencias;
  }
  
}