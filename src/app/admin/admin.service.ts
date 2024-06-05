import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyUser, Product } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiURL = 'http://localhost:8080/console';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Basic ${token}`
    });
  }

  getUsers(): Observable<MyUser[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<MyUser[]>(`${this.apiURL}/users`, { headers });
  }

  // updateUser(user: MyUser): Observable<MyUser> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.put<MyUser>(`${this.apiURL}/users/${user.id}`, user, { headers });
  // }
  updateUser(user: MyUser): Observable<MyUser> {
    const headers = this.getAuthHeaders();
    const userData = { 
      id: user.id,
      role: user.role,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      zipCode: user.zipCode,
      city: user.city,
      state: user.state,
      district: user.district,
      street: user.street
    };
    return this.http.put<MyUser>(`${this.apiURL}/users/${user.id}`, userData, { headers });
  }

  deleteUser(userId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiURL}/users/${userId}`, { headers });
  }


  getAllProducts(): Observable<Product[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Product[]>(`http://localhost:8080/product/list`, { headers });
  }

  updateProduct(productId: number, product: Partial<Product>): Observable<Product> {
    const headers = this.getAuthHeaders();
    return this.http.put<Product>(`${this.apiURL}/product/${productId}`, product, { headers });
  }

  updateProductPrice(productId: number, price: { productId: number; priceValue: number }): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.post<void>(`${this.apiURL}/price/product/${productId}`, price, { headers });
  }

  deleteProduct(productId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiURL}/product/${productId}`, { headers });
  }

}
