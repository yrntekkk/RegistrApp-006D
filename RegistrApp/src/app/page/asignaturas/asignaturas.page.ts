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
  asignaturaSeleccionada: string = ''; // Variable para almacenar la asignatura seleccionada

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {
    // Verificar si el escáner es soportado por el dispositivo
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  // Navegación a otra página
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

  // Escaneo de códigos QR
  async scan(codigoAsignatura: string): Promise<void> {
    this.asignaturaSeleccionada = codigoAsignatura; // Guardamos el código de la asignatura seleccionada

    // Solicitar permisos para la cámara
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert('Permiso denegado', 'Por favor, concede permisos para la cámara para usar el escáner de códigos.');
      return;
    }

    try {
      // Escanear código QR
      const { barcodes } = await BarcodeScanner.scan();
      if (barcodes.length > 0) {
        this.result = barcodes[0].displayValue || ''; // Usar el valor del QR
        this.registrarAsistencia(this.result);
      } else {
        console.warn('No se detectó ningún código QR.');
      }
    } catch (error) {
      console.error('Error al escanear el código:', error);
    }
  }

  //-------------------------------------------------------------------------------------------------------------------//

  // Registrar asistencia con restricciones
  registrarAsistencia(qrData: string): void {
    // Validar que el formato del QR sea correcto
    const parts = qrData.split('|');
    if (parts.length !== 4) {
      this.presentAlert('Formato Incorrecto', 'El código QR no cumple con el formato esperado: <ASIGNATURA>|<SECCION>|<SALA>|<FECHA>');
      return;
    }

    const [codigo, seccion, sala, fecha] = parts;

    // Verificar si el código QR corresponde a la asignatura seleccionada
    if (codigo !== this.asignaturaSeleccionada) {
      this.presentAlert('Asignatura Incorrecta', 'Este código QR no corresponde a la asignatura seleccionada.');
      return;
    }

    // Buscar la asignatura en la lista
    const asignatura = this.asignaturas.find(a => a.codigo === codigo && a.seccion === seccion && a.sala === sala);

    if (asignatura) {
      const fechaActual = new Date();
      const fechaHoy = fechaActual.toISOString().split('T')[0]; // Obtener solo la fecha en formato YYYY-MM-DD

      // Verificar si ya se registró la misma sección en el mismo horario
      const yaRegistrado = this.asistencias.some(asistencia =>
        asistencia.asignatura === asignatura.title &&
        asistencia.fechaHora.startsWith(fecha)
      );

      if (yaRegistrado) {
        this.presentAlert(
          'Registro Duplicado',
          `La sección ${seccion} ya fue registrada en el horario especificado.`
        );
        return;
      }

      // Verificar si ya hay 3 registros en el día
      const registrosHoy = this.asistencias.filter(asistencia =>
        asistencia.fechaHora.startsWith(fechaHoy)
      ).length;

      if (registrosHoy >= 3) {
        this.presentAlert(
          'Límite Alcanzado',
          'Solo se pueden registrar 3 secciones por día.'
        );
        return;
      }

      // Registrar la asistencia con la fecha y hora actual
      const fechaHoraActual = new Date().toLocaleString();
      this.asistencias.push({
        asignatura: asignatura.title,
        fechaHora: fechaHoraActual,
      });

      // Guardar las asistencias en localStorage
      localStorage.setItem('asistencias', JSON.stringify(this.asistencias));

      console.log('Asistencia registrada:', {
        asignatura: asignatura.title,
        fechaHora: fechaHoraActual,
      });

      this.presentAlert(
        'Registro Exitoso',
        `Asistencia registrada para ${asignatura.title} en la sección ${seccion}.`
      );
    } else {
      console.warn('El QR escaneado no coincide con ninguna asignatura.');
      this.presentAlert('Asignatura no encontrada', 'El código QR escaneado no coincide con ninguna asignatura registrada.');
    }
  }

  //-------------------------------------------------------------------------------------------------------------------------//

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

  // Obtener lista de asistencias
  getAsistencias(): { asignatura: string; fechaHora: string }[] {
    return this.asistencias;
  }
}
