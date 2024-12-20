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
  loginCorrecto: string = '';  

  private predefinedUsers = [
    {
      email: 'alumno1@example.com',
      password: 'alumno123',
      nombre: 'Juan',
      phone: '955345347',  
      career: 'Ingeniería Informática'
    },
    {
      email: 'alumno2@example.com',
      password: 'alumno123',
      nombre: 'Laura',  
      phone: '977568907',
      career: 'Ingeniería Informática'
    },
    {
      email: 'alumno3@example.com',
      password: 'alumno123',
      nombre: 'Carlos',  
      phone: '953705074',
      career: 'Ingeniería Informática'
    }
  ];

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    await this.loadPredefinedUsers();
  }

  async loadPredefinedUsers() {
    const users = await this.storage.get('users');
    if (!users) {
      await this.storage.set('users', this.predefinedUsers);
    }
  }

  async login() {
    const users = await this.storage.get('users');
    const user = users?.find((u: any) => u.email === this.email && u.password === this.password);

    if (user) {
      await this.storage.set('loggedInUser', user); 
      localStorage.setItem('authToken', 'true'); 
      this.loginCorrecto = 'Bienvenido, ' + user.nombre;
      this.router.navigate(['/inicio']); 
    } else {
      this.loginError = 'Credenciales incorrectas. Inténtalo de nuevo.';
      this.loginCorrecto = ''; 
    }
  }

  ReestablecerContrasena(event: any) {
    this.router.navigate(['/reestablecer']);
  }
}
