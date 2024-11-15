import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreCompleto: string = '';

  constructor(
    private router: Router,
    private storage: Storage,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    const loggedInUser = await this.storage.get('loggedInUser');
    if (loggedInUser) {
      this.nombreCompleto = loggedInUser.nombre;  
    } else {
      this.nombreCompleto = 'Usuario';
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          },
        },
        {
          text: 'Cerrar sesión',
          handler: async () => {
            await this.storage.remove('loggedInUser');
            this.router.navigate(['/home']);
            console.log('Sesión cerrada');
          },
        },
      ],
      cssClass: 'custom-alert',
    });

    await alert.present();
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