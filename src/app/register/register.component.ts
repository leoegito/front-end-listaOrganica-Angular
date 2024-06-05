// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   user: any = {
//     role: 'USER',
//     username: '',
//     fullname: '',
//     email: '',
//     phone: '',
//     passwordHash: '',
//     zipCode: null,
//     city: '',
//     state: '',
//     district: null,
//     street: null
//   };
//   message: string = '';

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   onSubmit() {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic ' + this.authService.getToken()
//     });

//     this.http.post('http://localhost:8080/users/register', this.user, { headers })
//       .subscribe({
//         next: (response: any) => {
//           this.message = `Usuário ${response.username} cadastrado com sucesso! Volte à página de Login e inicie sua jornada!`;
//         },
//         error: (err) => {
//           console.error('Failed to register user', err);
//         }
//       });
//   }
// }

// import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   user: any = {
//     role: 'USER',
//     username: '',
//     fullname: '',
//     email: '',
//     phone: '',
//     passwordHash: '',
//     zipCode: null,
//     city: '',
//     state: '',
//     district: null,
//     street: null
//   };
//   message: string = '';

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   onSubmit() {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic ' + this.authService.getToken()
//     });

//     this.http.post('http://localhost:8080/users/register', this.user, { headers })
//       .subscribe({
//         next: (response: any) => {
//           this.message = `Usuário ${response.username} cadastrado com sucesso! Volte à página de Login e inicie sua jornada!`;
//         },
//         error: (err) => {
//           console.error('Failed to register user', err);
//         }
//       });
//   }
// }

// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   username: string = '';
//   fullname: string = '';
//   email: string = '';
//   phone: string = '';
//   password: string = '';
//   zipCode: string = '';
//   city: string = '';
//   state: string = '';
//   district: string = '';
//   street: string = '';
//   role: string = 'USER'; // Default role
//   showSuccessMessage: boolean = false;
//   successMessage: string = '';

//   constructor(private http: HttpClient) {}

//   onSubmit() {
//     const user = {
//       username: this.username,
//       fullname: this.fullname,
//       email: this.email,
//       phone: this.phone,
//       passwordHash: this.password,
//       zipCode: this.zipCode,
//       city: this.city,
//       state: this.state,
//       district: this.district,
//       street: this.street,
//       role: this.role
//     };

//     this.http.post('http://localhost:8080/users/register', user).subscribe({
//       next: (response: any) => {
//         this.showSuccessMessage = true;
//         this.successMessage = `Usuário ${response.username} cadastrado com sucesso! Volte à página de Login e inicie sua jornada!`;
//         this.resetForm();
//       },
//       error: (err) => console.error('Registration failed', err)
//     });
//   }

//   resetForm() {
//     this.username = '';
//     this.fullname = '';
//     this.email = '';
//     this.phone = '';
//     this.password = '';
//     this.zipCode = '';
//     this.city = '';
//     this.state = '';
//     this.district = '';
//     this.street = '';
//     this.role = 'USER';
//   }
// }

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  fullname: string = '';
  email: string = '';
  password: string = '';
  city: string = '';
  state: string = '';
  role: string = 'USER';
  showSuccessMessage: boolean = false;
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const user = {
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      passwordHash: this.password,
      city: this.city,
      state: this.state,
      role: this.role
    };

    this.http.post('http://localhost:8080/users/register', user).subscribe(
      (response: any) => {
        this.showSuccessMessage = true;
        this.successMessage = `Usuário ${this.username} cadastrado com sucesso! Volte à página de Login e inicie sua jornada!`;
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
  }
}
