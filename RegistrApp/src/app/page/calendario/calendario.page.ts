import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  holidays: any[] = []; 

  constructor(private router: Router, private holidaysService: HolidaysService) {}

  ngOnInit() {
    this.holidaysService.getHolidays().subscribe(
      (response) => {
        this.holidays = response.data; 
      },
      (error) => {
        console.error("Error al cargar los datos:", error);
      }
    );
  }
  // Este es el método que se llama en el HTML
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}