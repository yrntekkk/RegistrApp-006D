import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener el estado adicional de la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.username = navigation.extras.state['username'] || 'Usuario';
    } else {
      this.username = 'Usuario';
    }
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
