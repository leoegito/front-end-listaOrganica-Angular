// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'basic-front-end';
// }
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

  // isAuthenticated(): boolean {
  //   return this.authService.getUserId() !== null;
  // }

  isAuthenticated(): boolean {
    return this.authService.getUserId() !== null;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
