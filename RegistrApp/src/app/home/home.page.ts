import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  email: string = '';
  password: string = '';
  loginError?: string;
  loginCorrecto: string = '';  // Agregado para mostrar el mensaje cuando el login sea correcto

  // Definir los usuarios predefinidos
  private predefinedUsers = [
    {
      email: 'alumno1@example.com',
      password: 'alumno123',
      nombre: 'Juan',  // Sólo nombre, sin apellido
      phone: '123456789',
      career: 'Ingeniería Informática'
    },
    {
      email: 'alumno2@example.com',
      password: 'alumno123',
      nombre: 'Laura',  // Sólo nombre, sin apellido
      phone: '987654321',
      career: 'Matemáticas'
    },
    {
      email: 'alumno3@example.com',
      password: 'alumno123',
      nombre: 'Carlos',  // Sólo nombre, sin apellido
      phone: '1122334455',
      career: 'Ingeniería Civil'
    }
  ];

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    await this.loadPredefinedUsers();
  }

  // Cargar los usuarios predefinidos al Storage
  async loadPredefinedUsers() {
    const users = await this.storage.get('users');
    if (!users) {
      await this.storage.set('users', this.predefinedUsers);
    }
  }

  // Método para hacer login
  async login() {
    const users = await this.storage.get('users');
    const user = users?.find((u: any) => u.email === this.email && u.password === this.password);

    if (user) {
      await this.storage.set('loggedInUser', user); // Guardar el usuario que ha iniciado sesión
      this.loginCorrecto = 'Bienvenido, ' + user.nombre; // Establece el mensaje de bienvenida
      this.router.navigate(['/inicio']); // Redirigir al inicio
    } else {
      this.loginError = 'Credenciales incorrectas. Inténtalo de nuevo.';
      this.loginCorrecto = '';  // Si las credenciales son incorrectas, no mostrar el mensaje de bienvenida
    }
  }

  // Método para reestablecer la contraseña
  ReestablecerContrasena(event: any) {
    // Aquí puedes hacer algo como redirigir a una página de recuperación de contraseña
    console.log('Recuperar contraseña para: ', this.email);
    alert('Funcionalidad para reestablecer contraseña no implementada aún.');
  }
}
