// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { MyUser } from './types';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiURL = 'http://localhost:8080/users';

//   constructor(private http: HttpClient, private router: Router) { }

//   login(username: string, password: string): Observable<MyUser> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//     });
  
//     const loginData = {
//       username: username,
//       passwordHash: password
//     };
  
//     return this.http.post<MyUser>(`${this.apiURL}/login`, loginData, { headers });
//   }

//   logout(): void {
//     if (typeof window !== 'undefined') {
//       sessionStorage.removeItem('userID');
//       sessionStorage.removeItem('token');
//     }
//   }

//   handleLogin(username: string, password: string) {
//     this.login(username, password).subscribe({
//       next: (user) => {
//         sessionStorage.setItem('userID', user.id.toString());
//         sessionStorage.setItem('token', btoa(`${username}:${password}`)); // Armazene o token de autenticação
//         this.router.navigate(['/user']);
//       },
//       error: (err) => console.error('Authentication failed', err)
//     });
//   }

//   getUserId(): number | null {
//     if (typeof window !== 'undefined') {
//       const userId = sessionStorage.getItem('userID');
//       return userId ? Number(userId) : null;
//     }
//     return null;
//   }

//   getToken(): string | null {
//     return sessionStorage.getItem('token');
//   }

// }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { MyUser } from './types';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiURL = 'http://localhost:8080/users';

//   constructor(private http: HttpClient, private router: Router) { }

//   login(username: string, password: string): Observable<MyUser> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic ' + btoa(`${username}:${password}`)
//     });
  
//     if (typeof window !== 'undefined') {
//       sessionStorage.setItem('token', btoa(`${username}:${password}`));
//     }
  
//     return this.http.post<MyUser>(`${this.apiURL}/login`, { username, passwordHash: password }, { headers });
//   }
  

//   handleLogin(username: string, password: string) {
//     this.login(username, password).subscribe({
//       next: (user) => {
//         sessionStorage.setItem('userID', user.id.toString());
//         sessionStorage.setItem('userRole', user.role);
//         this.router.navigate(['/user']);
//       },
//       error: (err) => console.error('Authentication failed', err)
//     });
//   }

//   getUserId(): number | null {
//     const userId = sessionStorage.getItem('userID');
//     return userId ? Number(userId) : null;
//   }

//   getUserRole(): string | null {
//     return sessionStorage.getItem('userRole');
//   }

//   logout(): void {
//     sessionStorage.clear();
//     this.router.navigate(['/login']);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MyUser } from './types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<MyUser> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });

    if (this.isSessionStorageAvailable()) {
      sessionStorage.setItem('token', btoa(`${username}:${password}`));
    }

    return this.http.post<MyUser>(`${this.apiURL}/login`, { username, passwordHash: password }, { headers });
  }

  handleLogin(username: string, password: string) {
    this.login(username, password).subscribe({
      next: (user) => {
        if (this.isSessionStorageAvailable()) {
          sessionStorage.setItem('userID', user.id.toString());
          sessionStorage.setItem('userRole', user.role);
        }
        this.router.navigate(['/user']);
      },
      error: (err) => console.error('Authentication failed', err)
    });
  }

  getUserId(): number | null {
    if (this.isSessionStorageAvailable()) {
      const userId = sessionStorage.getItem('userID');
      return userId ? Number(userId) : null;
    }
    return null;
  }

  getUserRole(): string | null {
    if (this.isSessionStorageAvailable()) {
      return sessionStorage.getItem('userRole');
    }
    return null;
  }

  logout(): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.clear();
    }
    this.router.navigate(['/login']);
  }

  private isSessionStorageAvailable(): boolean {
    try {
      const test = 'test';
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
