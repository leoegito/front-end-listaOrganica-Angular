// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Product } from '../types';

// @Injectable({
//   providedIn: 'root'
// })
// export class SellerService {
//   private apiUrl = 'http://localhost:8080';
//   private httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   constructor(private http: HttpClient) {}

//   getAllProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>(`${this.apiUrl}/product/list`, this.httpOptions);
//   }

//   searchProducts(query: string): Observable<Product[]> {
//     return this.http.get<Product[]>(`${this.apiUrl}/product/search?query=${query}`, this.httpOptions);
//   }

//   updateProductPrice(productId: number, priceData: { productId: number; priceValue: number }): Observable<void> {
//     return this.http.post<void>(`${this.apiUrl}/price/product/${productId}`, priceData, this.httpOptions);
//   }

//   createProduct(product: { name: string; description: string; userPrice: number }): Observable<void> {
//     return this.http.post<void>(`${this.apiUrl}/product`, product, this.httpOptions);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../types';

@Injectable({
    providedIn: 'root'
  })
  export class SellerService {
    private apiURL = 'http://localhost:8080';
  
    constructor(private http: HttpClient) {}
  
    getAuthHeaders(): HttpHeaders {
      const token = sessionStorage.getItem('token');
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
      });
    }
  
    getAllProducts(): Observable<Product[]> {
      const headers = this.getAuthHeaders();
      return this.http.get<Product[]>(`${this.apiURL}/product/list`, { headers });
    }
  
    searchProducts(query: string): Observable<Product[]> {
      const headers = this.getAuthHeaders();
      return this.http.get<Product[]>(`${this.apiURL}/product/search?query=${query}`, { headers });
    }
  
    updateProductPrice(productId: number, price: { productId: number; priceValue: number }): Observable<void> {
      const headers = this.getAuthHeaders();
      return this.http.post<void>(`${this.apiURL}/price/product/${productId}`, price, { headers });
    }
  
    registerNewProduct(product: { name: string; description: string; userPrice?: number }): Observable<void> {
      const headers = this.getAuthHeaders();
      return this.http.post<void>(`${this.apiURL}/product`, product, { headers });
    }

    createProduct(product: { name: string; description: string; userPrice: number }): Observable<void> {
        const headers = this.getAuthHeaders();
        return this.http.post<void>(`${this.apiURL}/product`, product, { headers });
    }

    addProduct(product: { name: string; description: string; userPrice: number | null }): Observable<Product> {
        const headers = this.getAuthHeaders();
        return this.http.post<Product>(`${this.apiURL}/product`, product, { headers });
    }

  }
  