// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Route } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(private authService: AuthService, private router: Route) {}

//   onSubmit() {
//     this.authService.handleLogin(this.username, this.password);
//   }

//   navigateToRegister() {
//     this.router.navigate(['/register']);
//   }

// }
// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onSubmit() {
//     this.authService.handleLogin(this.username, this.password);
//   }

//   navigateToRegister() {
//     this.router.navigate(['/register']);
//   }
// }

// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onSubmit() {
//     this.authService.handleLogin(this.username, this.password);
//   }

//   goToRegister() {
//     this.router.navigate(['/register']);
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.handleLogin(this.username, this.password);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
