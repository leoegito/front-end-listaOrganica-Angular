import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getUserShoppingLists(userID: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    return this.http.get(`${this.apiURL}/users/${userID}/productList/list`, { headers });
  }

  getShoppingList(userID: string, listID: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    return this.http.get(`${this.apiURL}/users/${userID}/productList/${listID}`, { headers });
  }
}
