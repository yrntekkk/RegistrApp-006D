import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reestablecer',
  templateUrl: 'reestablecer.page.html',
  styleUrls: ['reestablecer.page.scss'],
})
export class ReestablecerPage {
  username: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    console.log('Recuperar contraseña para: ', this.username);

    if (!this.username) {
      alert('Por favor, ingresa tu nombre de usuario.');
      return;
    }

    this.router.navigate(['/home']); 
  }
}

