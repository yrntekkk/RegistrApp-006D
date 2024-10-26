import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';


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

  async scanBarcode() {
    try {
      const result = await BarcodeScanner.scan();
      console.log('Barcode data:', result);
    } catch (error) {
      console.error('Error al escanear el código:', error);
    }
  }

  
}
