// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiURL = 'http://localhost:8080/users';

//   constructor(private http: HttpClient, private router: Router) { }

//   login(username: string, password: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic ' + btoa(`${username}:${password}`)
//     });
  
//     if (typeof window !== 'undefined') {
//       sessionStorage.setItem('token', btoa(`${username}:${password}`));
//     }
  
//     return this.http.get(`${this.apiURL}/1`, { headers });
//   }
  

//   handleLogin(username: string, password: string) {
//     this.login(username, password).subscribe({
//       next: () => this.router.navigate(['/user']),
//       error: (err) => console.error('Authentication failed', err)
//     });
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

  // login(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Basic ' + btoa(`${username}:${password}`)
  //   });

  //   if (typeof window !== 'undefined') {
  //     sessionStorage.setItem('token', btoa(`${username}:${password}`));
  //   }

  //   return this.http.get(`${this.apiURL}/1`, { headers }); // Este endpoint deve retornar o userID
  // }
  login(username: string, password: string): Observable<MyUser> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    const loginData = {
      username: username,
      passwordHash: password
    };
  
    return this.http.post<MyUser>(`${this.apiURL}/login`, loginData, { headers });
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('userID');
      sessionStorage.removeItem('token');
    }
  }

  // logout(): void {
  //   sessionStorage.removeItem('userID');
  //   sessionStorage.removeItem('token');
  // }

  // handleLogin(username: string, password: string) {
  //   this.login(username, password).subscribe({
  //     next: (response) => {
  //       // Suponha que o response contenha o userID
  //       if (typeof window !== 'undefined') {
  //         sessionStorage.setItem('userID', response.id); // Suponha que o userID seja 'id'
  //       }
  //       this.router.navigate(['/user']);
  //     },
  //     error: (err) => console.error('Authentication failed', err)
  //   });
  // }
  handleLogin(username: string, password: string) {
    this.login(username, password).subscribe({
      next: (user) => {
        sessionStorage.setItem('userID', user.id.toString());
        sessionStorage.setItem('token', btoa(`${username}:${password}`)); // Armazene o token de autenticação
        this.router.navigate(['/user']);
      },
      error: (err) => console.error('Authentication failed', err)
    });
  }

  // getUserId(): number | null {
  //   const userId = sessionStorage.getItem('userID');
  //   return userId ? Number(userId) : null;
  // }
  getUserId(): number | null {
    if (typeof window !== 'undefined') {
      const userId = sessionStorage.getItem('userID');
      return userId ? Number(userId) : null;
    }
    return null;
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  // getUserIdFromToken(): number | null {
  //   const token = this.getToken();
  //   if (token) {
  //     const decodedToken = atob(token);
  //     const [username] = decodedToken.split(':');
  //     // Aqui estamos assumindo que o username é o userID
  //     // Se o token tiver uma estrutura diferente, você precisa ajustar isso
  //     const userId = parseInt(username, 10);
  //     return isNaN(userId) ? null : userId;
  //   }
  //   return null;
  // }

}
