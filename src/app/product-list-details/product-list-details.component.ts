// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ShoppingListService } from '../shopping-list.service';
// import { ProductList, ListItem, Product } from '../types';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-product-list-details',
//   templateUrl: './product-list-details.component.html',
//   styleUrls: ['./product-list-details.component.css']
// })
// export class ProductListDetailsComponent implements OnInit {
//   productList: ProductList | undefined;
//   userID: number | null = null;
//   listID: number = 1;
//   showSearchBox: boolean = false;
//   searchQuery: string = '';
//   searchResults: Product[] = [];
//   selectedProduct: Product | null = null;

//   constructor(
//     private route: ActivatedRoute,
//     private shoppingListService: ShoppingListService,
//     private authService: AuthService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.listID = Number(this.route.snapshot.paramMap.get('id'));
//     this.userID = this.authService.getUserId();

//     if (this.userID === null) {
//       console.error('User is not authenticated');
//       this.router.navigate(['/login']); // Redireciona para a página de login se não estiver autenticado
//     } else {
//       this.loadShoppingList();
//     }
//   }

//   loadShoppingList(): void {
//     if (this.userID !== null) {
//       this.shoppingListService.getShoppingList(this.userID, this.listID).subscribe({
//         next: (data: ProductList) => {
//           this.productList = data;
//         },
//         error: (err) => {
//           console.error('Failed to load shopping list', err);
//         }
//       });
//     }
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

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ShoppingListService } from '../shopping-list.service';
// import { ProductList, ListItem, Product, Price } from '../types';
// import { Subscription, interval } from 'rxjs';

// @Component({
//   selector: 'app-product-list-details',
//   templateUrl: './product-list-details.component.html',
//   styleUrls: ['./product-list-details.component.css']
// })
// export class ProductListDetailsComponent implements OnInit, OnDestroy {
//   productList: ProductList | undefined;
//   userID: number = 1; // Altere para obter o ID do usuário logado
//   listID: number = 1;
//   showSearchBox: boolean = false;
//   searchQuery: string = '';
//   searchResults: Product[] = [];
//   selectedProduct: Product | null = null;
//   private refreshSubscription: Subscription = new Subscription;

//   constructor(private route: ActivatedRoute, private shoppingListService: ShoppingListService) { }

//   ngOnInit(): void {
// //     this.listID = Number(this.route.snapshot.paramMap.get('id'));
// //     this.userID = this.authService.getUserId();

// //     if (this.userID === null) {
// //       console.error('User is not authenticated');
// //       this.router.navigate(['/login']); // Redireciona para a página de login se não estiver autenticado
// //     } else {
// //       this.loadShoppingList();
// //     }

//     this.listID = Number(this.route.snapshot.paramMap.get('id'));
//     this.loadShoppingList();
//     this.refreshSubscription = interval(120000).subscribe(() => this.loadShoppingList());
//   }

//   ngOnDestroy(): void {
//     if (this.refreshSubscription) {
//       this.refreshSubscription.unsubscribe();
//     }
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

//   editPrice(item: ListItem): void {
//     item.editingPrice = true;
//     item.newPrice = item.price;
//   }

//   cancelEditPrice(item: ListItem): void {
//     item.editingPrice = false;
//     item.newPrice = null;
//   }


//   updatePrice(item: ListItem): void {
//     if (item.newPrice !== null && item.newPrice !== undefined) {
//       const newPriceValue = item.newPrice;
//       const price: Price = { priceValue: newPriceValue };
    
//       this.shoppingListService.updateProductPrice(item.id.product.id, price).subscribe({
//         next: () => {
//           item.price = newPriceValue;
//           item.subTotal = item.quantity * newPriceValue;
//           item.editingPrice = false;
//         },
//         error: (err) => {
//           console.error('Failed to update price', err);
//           item.editingPrice = false;
//         }
//       });
//     }
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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from '../shopping-list.service';
import { ProductList, ListItem, Product, Price } from '../types';
import { Subscription, interval } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  styleUrls: ['./product-list-details.component.css']
})
export class ProductListDetailsComponent implements OnInit, OnDestroy {
  productList: ProductList | undefined;
  userID: number | null = null;
  listID: number = 1;
  showSearchBox: boolean = false;
  showNewProductForm: boolean = false;
  searchQuery: string = '';
  searchResults: Product[] = [];
  selectedProduct: Product | null = null;
  newProductName: string = '';
  newProductDescription: string = '';
  newProductPrice: number | null = null;
  private refreshSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoppingListService: ShoppingListService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.listID = Number(this.route.snapshot.paramMap.get('id'));
    this.userID = this.authService.getUserId();

    if (this.userID === null) {
      console.error('User is not authenticated');
      this.router.navigate(['/login']); // Redireciona para a página de login se não estiver autenticado
    } else {
      this.loadShoppingList();
      this.refreshSubscription = interval(120000).subscribe(() => this.loadShoppingList());
    }
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
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
    if (this.userID !== null) {
      const endpoint = change > 0 ? 'addQuantity' : 'subtractQuantity';
      this.shoppingListService.changeQuantity(this.listID, item.id.product, endpoint).subscribe({
        next: () => {
          this.loadShoppingList(); // Recarrega a lista de compras após a modificação da quantidade
        },
        error: (err) => {
          console.error('Failed to update quantity', err);
        }
      });
    }
  }

  editPrice(item: ListItem): void {
    item.editingPrice = true;
    item.newPrice = item.price;
  }

  cancelEditPrice(item: ListItem): void {
    item.editingPrice = false;
    item.newPrice = null;
  }

  updatePrice(item: ListItem): void {
    if (item.newPrice !== null && item.newPrice !== undefined) {
      const newPriceValue = item.newPrice;
      const price: Price = { priceValue: newPriceValue };

      this.shoppingListService.updateProductPrice(item.id.product.id, price).subscribe({
        next: () => {
          item.id.product.userPrice = newPriceValue;
          item.subTotal = item.quantity * newPriceValue;
          item.editingPrice = false;
        },
        error: (err) => {
          console.error('Failed to update price', err);
          item.editingPrice = false;
        }
      });
    }
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
    if (!this.selectedProduct || !this.productList) {
      return;
    }
    
    // Verifica se o produto já está na lista
    const existingItem = this.productList.listItems.find(item => item.id.product.id === this.selectedProduct!.id);
    
    if (existingItem) {
      console.log('Product already exists in the list');
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

  registerNewProduct(): void {
    if (!this.newProductName.trim() || !this.newProductDescription.trim()) {
      return;
    }

    const newProduct: Product = {
      id: 0, // Este campo será ignorado pelo back-end
      name: this.newProductName,
      description: this.newProductDescription,
      globalMediumPrice: 0,
      userPrice: this.newProductPrice || 0,
      median: 0,
      maximumValue: 0,
      minimumValue: 0
    };

    this.shoppingListService.registerNewProduct(newProduct).subscribe({
      next: (location: string) => {
        const productId = location.split('/').pop();
        if (productId) {
          newProduct.id = Number(productId);
          this.selectedProduct = newProduct;
          this.addProduct();
        }
        this.showNewProductForm = false;
      },
      error: (err) => {
        console.error('Failed to register new product', err);
      }
    });
  }

  cancelNewProductForm(): void {
    this.showNewProductForm = false;
    this.newProductName = '';
    this.newProductDescription = '';
    this.newProductPrice = null;
  }


}

