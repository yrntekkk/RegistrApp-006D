import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';
  loginError?: string;
  loginCorrecto?: string;

  constructor(private navCtrl: NavController) {}

  login() {
    // Validación de las credenciales
    if (this.username === 'admin' && this.password === 'admin123') {
      // Muestra un mensaje de éxito
      this.loginCorrecto = 'Inicio de sesión exitoso!';
      this.loginError = '';

      // Redirige a la página 'dashboard' (o la página que desees)
      this.navCtrl.navigateForward('/dashboard'); // Asegúrate de tener la ruta '/dashboard' definida
    } else {
      this.loginError = 'Credenciales incorrectas. Inténtalo de nuevo.';
      this.loginCorrecto = '';
    }
  }
}

