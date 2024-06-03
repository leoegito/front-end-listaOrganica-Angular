// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingListService {
//   private apiURL = 'http://localhost:8080';

//   constructor(private http: HttpClient) { }

//   getUserShoppingLists(userID: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic ' + sessionStorage.getItem('token')
//     });

//     return this.http.get(`${this.apiURL}/users/${userID}/productList/list`, { headers });
//   }

//   getShoppingList(userID: string, listID: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic ' + sessionStorage.getItem('token')
//     });

//     return this.http.get(`${this.apiURL}/users/${userID}/productList/${listID}`, { headers });
//   }
// }
// shopping-list.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// // import { ProductList } from './types';
// import { ProductList } from './types';

// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingListService {
//   private baseUrl = 'http://localhost:8080/users';

//   constructor(private http: HttpClient) { }

//   getUserShoppingLists(userID: string): Observable<ProductList[]> {
//     return this.http.get<ProductList[]>(`${this.baseUrl}/${userID}/productList/list`);
//   }

//   getShoppingList(userID: string, listID: string): Observable<ProductList> {
//     return this.http.get<ProductList>(`${this.baseUrl}/${userID}/productList/${listID}`);
//   }

//   deleteShoppingList(userID: string, listID: string): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/${userID}/productList/${listID}`);
//   }
// }
// shopping-list.service.ts
//////////////////
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ProductList } from './types';

// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingListService {
//   private baseUrl = 'http://localhost:8080/users';

//   constructor(private http: HttpClient) { }

//   private getAuthHeaders(): HttpHeaders {
//     const token = sessionStorage.getItem('token');
//     return new HttpHeaders({
//       'Authorization': `Basic ${token}`
//     });
//   }

//   getUserShoppingLists(userID: string): Observable<ProductList[]> {
//     const headers = this.getAuthHeaders();
//     return this.http.get<ProductList[]>(`${this.baseUrl}/${userID}/productList/list`, { headers });
//   }

//   getShoppingList(userID: string, listID: string): Observable<ProductList> {
//     const headers = this.getAuthHeaders();
//     return this.http.get<ProductList>(`${this.baseUrl}/${userID}/productList/${listID}`, { headers });
//   }

//   deleteShoppingList(userID: string, listID: string): Observable<void> {
//     const headers = this.getAuthHeaders();
//     return this.http.delete<void>(`${this.baseUrl}/${userID}/productList/${listID}`, { headers });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ProductList } from 'src/app/types';
// import { types } from 'util';
import { ListItem, Product, ProductList } from './types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private baseUrl = 'http://localhost:8080/users';

  private getAuthHeaders(): HttpHeaders {
    const token = sessionStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Basic ${token}`,
      'Content-Type': 'application/json'
    });
  }

  constructor(private http: HttpClient) { }

  getShoppingLists(userId: number): Observable<ProductList[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<ProductList[]>(`${this.baseUrl}/${userId}/productList/list`, { headers });
  }

  getShoppingList(userId: number, listId: number): Observable<ProductList> {
    const headers = this.getAuthHeaders();
    return this.http.get<ProductList>(`${this.baseUrl}/${userId}/productList/${listId}`, { headers });
  }

  // deleteShoppingList(userId: number, listId: number): Observable<void> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.delete<void>(`${this.baseUrl}/${userId}/productList/${listId}`, { headers });
  // }
  deleteShoppingList(userId: number, listId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`http://localhost:8080/shoppingList/${listId}`, { headers });
  }

  createShoppingList(title: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`http://localhost:8080/shoppingList/create`, { title }, { headers, observe: 'response' });
  }

  associateShoppingListWithUser(userId: number, listId: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.put<void>(`${this.baseUrl}/${userId}/productList/${listId}`, null, { headers });
  }


  // changeQuantity(listId: number, product: Product): Observable<ProductList> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.put<ProductList>(`http://localhost:8080/shoppingList/${listId}/addQuantity`, product, { headers });
  // }
  // changeQuantity(listId: number, product: Product, endpoint: string): Observable<ProductList> {
  //   const headers = this.getAuthHeaders();
  //   return this.http.put<ProductList>(`http://localhost:8080/shoppingList/${listId}/${endpoint}`, product, { headers });
  // }

  changeQuantity(listId: number, product: Product, endpoint: string): Observable<ProductList> {
    const headers = this.getAuthHeaders();
    return this.http.put<ProductList>(`http://localhost:8080/shoppingList/${listId}/${endpoint}`, product, { headers });
  }

  searchProducts(query: string): Observable<Product[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Product[]>(`http://localhost:8080/product/search?searchName=${query}`, { headers });
  }

  addProductToList(listId: number, product: Product): Observable<ProductList> {
    const headers = this.getAuthHeaders();
    return this.http.post<ProductList>(`http://localhost:8080/shoppingList/${listId}/add-product`, product, { headers });
  }


}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ProductList } from './types';

// @Injectable({
//   providedIn: 'root'
// })
// export class ShoppingListService {
//   private baseUrl = 'http://localhost:8080/users';

//   constructor(private http: HttpClient) { }

//   getShoppingLists(userId: number): Observable<ProductList[]> {
//     return this.http.get<ProductList[]>(`${this.baseUrl}/${userId}/productList/list`);
//   }

//   getShoppingList(userId: number, listId: number): Observable<ProductList> {
//     return this.http.get<ProductList>(`${this.baseUrl}/${userId}/productList/${listId}`);
//   }

//   deleteShoppingList(userId: number, listId: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/${userId}/productList/${listId}`);
//   }
// }

