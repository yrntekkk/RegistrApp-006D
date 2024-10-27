import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    const isAuthenticated = localStorage.getItem('authToken') !== null;

    if (!isAuthenticated) {
      this.router.navigate(['/home']); 
      return false;
    }
    return true;
  }
}

