import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://localhost:8080/product';

  constructor(private http: HttpClient, private router: Router) { }

  // login(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Basic ' + btoa(`${username}:${password}`)
  //   });

  //   return this.http.get(`${this.apiURL}/user`, { headers });
  // }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });
  
    // sessionStorage.setItem('token', btoa(`${username}:${password}`));
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('token', btoa(`${username}:${password}`));
    }
  
    return this.http.get(`${this.apiURL}/1`, { headers });
  }
  

  handleLogin(username: string, password: string) {
    this.login(username, password).subscribe({
      next: () => this.router.navigate(['/user']),
      error: (err) => console.error('Authentication failed', err)
    });
  }
}