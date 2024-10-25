import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {
  scannedData: any;
  asignaturas = [
    { title: 'Programacion Movil' },
    { title: 'Arquitectura' },
    { title: 'Ingles Elemental' },
    { title: 'Programacion Base de Datos' },
    { title: 'Desarrollo de Software' }
  ];
  constructor(private router: Router, private barcodeScanner: BarcodeScanner) {}

  // Este es el método que se llama en el HTML
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

  async scanCode() {
    try {
      const barcodeData = await this.barcodeScanner.scan();
      this.scannedData = barcodeData;
      console.log('Código escaneado:', this.scannedData);
      // Aquí puedes manejar los datos escaneados como prefieras
    } catch (err) {
      console.error('Error de escaneo:', err);
    }
  }

  
}
