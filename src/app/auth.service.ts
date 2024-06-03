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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://localhost:8080/users';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });

    if (typeof window !== 'undefined') {
      sessionStorage.setItem('token', btoa(`${username}:${password}`));
    }

    return this.http.get(`${this.apiURL}/1`, { headers }); // Este endpoint deve retornar o userID
  }

  handleLogin(username: string, password: string) {
    this.login(username, password).subscribe({
      next: (response) => {
        // Suponha que o response contenha o userID
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('userID', response.id); // Suponha que o userID seja 'id'
        }
        this.router.navigate(['/user']);
      },
      error: (err) => console.error('Authentication failed', err)
    });
  }

  getUserId(): number | null {
    const userId = sessionStorage.getItem('userID');
    return userId ? Number(userId) : null;
  }
}
