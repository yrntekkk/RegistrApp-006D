import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {
    result: string = ''
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

  async scan(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    this.result = result.ScanResult;
  }

  
}
