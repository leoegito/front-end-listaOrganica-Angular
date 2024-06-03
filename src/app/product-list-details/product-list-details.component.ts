// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ShoppingListService } from '../shopping-list.service';

// @Component({
//   selector: 'app-product-list-details',
//   templateUrl: './product-list-details.component.html',
//   styleUrls: ['./product-list-details.component.css']
// })
// export class ProductListDetailsComponent implements OnInit {
//   productList: any;
//   userID: number = 1; // Altere para obter o ID do usuário logado
//   listID: number = 1;

//   constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService) { }

//   ngOnInit(): void {
//     this.listID = Number(this.route.snapshot.paramMap.get('id'));
//     this.loadShoppingList();
//   }

//   loadShoppingList(): void {
//     this.shoppingListService.getShoppingList(this.userID.toString(), this.listID.toString()).subscribe({
//       next: (data) => {
//         this.productList = data;
//       },
//       error: (err) => {
//         console.error('Failed to load shopping list', err);
//       }
//     });
//   }

//   // getTotal(): number {
//   //   return this.productList.listItems.reduce((sum, item) => sum + item.subTotal, 0);
//   // }
  
//   getTotal(): number {
//     return this.productList.listItems.reduce((sum: number, item: any) => sum + item.subTotal, 0);
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ShoppingListService } from '../shopping-list.service';
// import { ProductList, ListItem } from '../types';

// @Component({
//   selector: 'app-product-list-details',
//   templateUrl: './product-list-details.component.html',
//   styleUrls: ['./product-list-details.component.css']
// })
// export class ProductListDetailsComponent implements OnInit {
//   productList: ProductList | undefined;
//   userID: number = 1; // Altere para obter o ID do usuário logado
//   listID: number = 1;

//   constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService) { }

//   ngOnInit(): void {
//     this.listID = Number(this.route.snapshot.paramMap.get('id'));
//     this.loadShoppingList();
//   }

//   loadShoppingList(): void {
//     this.shoppingListService.getShoppingList(this.userID, this.listID).subscribe({
//       next: (data: ProductList) => {
//         this.productList = data;
//       },
//       error: (err) => {
//         console.error('Failed to load shopping list', err);
//       }
//     });
//   }

//   getTotal(): number {
//     if (!this.productList) return 0;
//     return this.productList.listItems.reduce((sum: number, item: ListItem) => sum + item.subTotal, 0);
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ShoppingListService } from '../shopping-list.service';
// import { ProductList, ListItem, Product } from '../types';

// @Component({
//   selector: 'app-product-list-details',
//   templateUrl: './product-list-details.component.html',
//   styleUrls: ['./product-list-details.component.css']
// })
// export class ProductListDetailsComponent implements OnInit {
//   productList: ProductList | undefined;
//   userID: number = 1; // Altere para obter o ID do usuário logado
//   listID: number = 1;

//   constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService) { }

//   ngOnInit(): void {
//     this.listID = Number(this.route.snapshot.paramMap.get('id'));
//     this.loadShoppingList();
//   }

//   loadShoppingList(): void {
//     this.shoppingListService.getShoppingList(this.userID, this.listID).subscribe({
//       next: (data: ProductList) => {
//         this.productList = data;
//       },
//       error: (err) => {
//         console.error('Failed to load shopping list', err);
//       }
//     });
//   }

//   getTotal(): number {
//     if (!this.productList) return 0;
//     return this.productList.listItems.reduce((sum: number, item: ListItem) => sum + item.subTotal, 0);
//   }

//   // changeQuantity(item: ListItem, change: number): void {
//   //   const newQuantity = item.quantity + change;
//   //   if (newQuantity < 0) {
//   //     return;
//   //   }

//   //   const updatedItem: ListItem = {
//   //     ...item,
//   //     quantity: newQuantity
//   //   };

//   //   this.shoppingListService.changeQuantity(this.listID, updatedItem).subscribe({
//   //     next: (updatedList: ProductList | undefined) => {
//   //       this.productList = updatedList;
//   //     },
//   //     error: (err: any) => {
//   //       console.error('Failed to update quantity', err);
//   //     }
//   //   });
//   // }

//   addQuantity(product: Product, item: ListItem): void {
//     const updatedItem: Product = {
//       ...,product,
//       quantity: item.quantity + 1,
//       id: {
//         productList: this.listID,
//         product: item.id.product
//       }
//     };

//     this.shoppingListService.changeQuantity(this.listID, updatedItem).subscribe({
//       next: (data: ProductList) => {
//         this.productList = data;
//       },
//       error: (err) => {
//         console.error('Failed to update quantity', err);
//       }
//     });
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ShoppingListService } from '../shopping-list.service';
// import { ProductList, ListItem, Product } from '../types';

// @Component({
//   selector: 'app-product-list-details',
//   templateUrl: './product-list-details.component.html',
//   styleUrls: ['./product-list-details.component.css']
// })
// export class ProductListDetailsComponent implements OnInit {
//   productList: ProductList | undefined;
//   userID: number = 1; // Altere para obter o ID do usuário logado
//   listID: number = 1;
//   showSearchBox: boolean = false;
//   searchQuery: string = '';
//   searchResults: Product[] = [];
//   selectedProduct: Product | null = null;

//   constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService) { }

//   ngOnInit(): void {
//     this.listID = Number(this.route.snapshot.paramMap.get('id'));
//     this.loadShoppingList();
//   }

//   loadShoppingList(): void {
//     this.shoppingListService.getShoppingList(this.userID, this.listID).subscribe({
//       next: (data: ProductList) => {
//         this.productList = data;
//       },
//       error: (err) => {
//         console.error('Failed to load shopping list', err);
//       }
//     });
//   }

//   getTotal(): number {
//     if (!this.productList) return 0;
//     return this.productList.listItems.reduce((sum: number, item: ListItem) => sum + item.subTotal, 0);
//   }

//   changeQuantity(item: ListItem, change: number): void {
//     const endpoint = change > 0 ? 'addQuantity' : 'subtractQuantity';
//     this.shoppingListService.changeQuantity(this.listID, item.id.product, endpoint).subscribe({
//       next: (data: ProductList) => {
//         this.productList = data;
//       },
//       error: (err) => {
//         console.error('Failed to update quantity', err);
//       }
//     });
//   }

//   searchProducts(): void {
//     if (this.searchQuery.trim() === '') {
//       this.searchResults = [];
//       return;
//     }
//     this.shoppingListService.searchProducts(this.searchQuery).subscribe({
//       next: (data: Product[]) => {
//         this.searchResults = data;
//       },
//       error: (err) => {
//         console.error('Failed to search products', err);
//       }
//     });
//   }

//   selectProduct(product: Product): void {
//     this.selectedProduct = product;
//     this.searchQuery = product.name;
//     this.searchResults = [];
//   }

//   addProduct(): void {
//     if (!this.selectedProduct) {
//       return;
//     }
//     this.shoppingListService.addProductToList(this.listID, this.selectedProduct).subscribe({
//       next: (data: ProductList) => {
//         this.productList = data;
//         this.showSearchBox = false;
//         this.selectedProduct = null;
//         this.searchQuery = '';
//       },
//       error: (err) => {
//         console.error('Failed to add product to list', err);
//       }
//     });
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from '../shopping-list.service';
import { ProductList, ListItem, Product } from '../types';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  styleUrls: ['./product-list-details.component.css']
})
export class ProductListDetailsComponent implements OnInit {
  productList: ProductList | undefined;
  userID: number | null = null;
  listID: number = 1;
  showSearchBox: boolean = false;
  searchQuery: string = '';
  searchResults: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listID = Number(this.route.snapshot.paramMap.get('id'));
    this.userID = this.authService.getUserId();

    if (this.userID === null) {
      console.error('User is not authenticated');
      this.router.navigate(['/login']); // Redireciona para a página de login se não estiver autenticado
    } else {
      this.loadShoppingList();
    }
  }

  loadShoppingList(): void {
    if (this.userID !== null) {
      this.shoppingListService.getShoppingList(this.userID, this.listID).subscribe({
        next: (data: ProductList) => {
          this.productList = data;
        },
        error: (err) => {
          console.error('Failed to load shopping list', err);
        }
      });
    }
  }

  getTotal(): number {
    if (!this.productList) return 0;
    return this.productList.listItems.reduce((sum: number, item: ListItem) => sum + item.subTotal, 0);
  }

  changeQuantity(item: ListItem, change: number): void {
    const endpoint = change > 0 ? 'addQuantity' : 'subtractQuantity';
    this.shoppingListService.changeQuantity(this.listID, item.id.product, endpoint).subscribe({
      next: (data: ProductList) => {
        this.productList = data;
      },
      error: (err) => {
        console.error('Failed to update quantity', err);
      }
    });
  }

  searchProducts(): void {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }
    this.shoppingListService.searchProducts(this.searchQuery).subscribe({
      next: (data: Product[]) => {
        this.searchResults = data;
      },
      error: (err) => {
        console.error('Failed to search products', err);
      }
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
    this.searchQuery = product.name;
    this.searchResults = [];
  }

  addProduct(): void {
    if (!this.selectedProduct) {
      return;
    }
    this.shoppingListService.addProductToList(this.listID, this.selectedProduct).subscribe({
      next: (data: ProductList) => {
        this.productList = data;
        this.showSearchBox = false;
        this.selectedProduct = null;
        this.searchQuery = '';
      },
      error: (err) => {
        console.error('Failed to add product to list', err);
      }
    });
  }
}
