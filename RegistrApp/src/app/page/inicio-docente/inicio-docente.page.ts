import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio-docente',
  templateUrl: './inicio-docente.page.html',
  styleUrls: ['./inicio-docente.page.scss'],
})
export class ProfesorPage implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener el nombre del usuario del estado de la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.username = navigation.extras.state['username'] || 'Usuario';
    } else {
      this.username = 'Usuario';
    }
  }

  generateQRCode() {
    // Lógica para generar QR (actualmente solo visual)
    console.log('Generar QR');
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
