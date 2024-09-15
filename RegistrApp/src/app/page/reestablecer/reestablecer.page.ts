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
    // Aquí iría la lógica para restablecer la contraseña (no implementada por ahora)
    this.router.navigate(['/home']);
  }
}

