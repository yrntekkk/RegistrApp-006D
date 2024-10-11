import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombreCompleto: string = '';
  email: string = '';
  telefono: string = '';
  carrera: string = '';
  fotoPerfil: string = ''; // Puedes asignar la foto aquí si la tienes

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    await this.storage.create();
    const loggedInUser = await this.storage.get('loggedInUser');
    console.log('Usuario logueado:', loggedInUser); // Verifica en la consola si el usuario es correcto
  
    if (loggedInUser) {
      this.email = loggedInUser.email || '';
      this.nombreCompleto = loggedInUser.nombre || 'Usuario';
      this.telefono = loggedInUser.telefono || '';
      this.carrera = loggedInUser.carrera || '';
      this.fotoPerfil = loggedInUser.foto || 'assets/img/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png'; // Si tienes una foto de perfil
    } else {
      this.router.navigate(['/home']); // Redirige a la página de login si no está logueado
    }
  }

  logout() {
    this.storage.remove('loggedInUser');
    this.router.navigate(['/home']); // Redirigir al login
  }

  // Método para la navegación entre páginas
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
