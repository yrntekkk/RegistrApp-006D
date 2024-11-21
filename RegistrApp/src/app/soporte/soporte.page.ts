import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage implements OnInit {

  constructor( private router: Router,) { 
    
  }

  ngOnInit() {
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
