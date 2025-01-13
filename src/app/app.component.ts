import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minha Lista Orgânica';

  constructor(private authService: AuthService, private router: Router) {}


  isAuthenticated(): boolean {
    return this.authService.getUserId() !== null;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  hasRole(role: string): boolean {
    const userRole = this.authService.getUserRole();
    return userRole ? userRole.includes(role) : false;
  }

  // isAdmin(): boolean {
  //   return this.authService.getUserRole() === 'ADMIN';
  // }

}
