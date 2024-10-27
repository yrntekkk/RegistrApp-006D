import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreCompleto: string = '';

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    const loggedInUser = await this.storage.get('loggedInUser');
    if (loggedInUser) {
      this.nombreCompleto = loggedInUser.nombre;  
    } else {
      this.nombreCompleto = 'Usuario';
    }
  }

  logout() {
    this.storage.remove('loggedInUser');
    this.router.navigate(['/home']); 
  }

  asignaturas() {
    this.router.navigate(['/asignaturas']);
  }

  calendario() {
    this.router.navigate(['/calendario']);
  }

  perfil() {
    this.router.navigate(['/perfil']);
  }
}
