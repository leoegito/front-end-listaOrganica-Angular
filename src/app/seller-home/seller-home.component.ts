// // import { Component, OnInit, OnDestroy } from '@angular/core';
// // import { SellerService } from './seller.service';
// // import { Product } from '../types';
// // import { Subscription, interval } from 'rxjs';

// import { OnInit } from "@angular/core";
// import { Product } from "../types";
// import { SellerService } from "./seller.service";

// // @Component({
// //   selector: 'app-seller-home',
// //   templateUrl: './seller-home.component.html',
// //   styleUrls: ['./seller-home.component.css']
// // })
// // export class SellerHomeComponent implements OnInit, OnDestroy {
// //   // products: Product[] = [];
// //   // filteredProducts: Product[] = [];
// //   // editingProductPrice: Product | null = null;
// //   // newProductPrice: number | null = null;
// //   // showNewProductForm: boolean = false;
// //   // searchQuery: string = '';
// //   // private refreshSubscription: Subscription | undefined;
// //   products: Product[] = [];
// //   filteredProducts: Product[] = [];
// //   editingProductPrice: Product | null = null;
// //   newProductPrice: number | null = null;
// //   showNewProductForm: boolean = false;
// //   searchQuery: string = '';
// //   newProductName: string = '';  // Adicionada esta propriedade
// //   newProductDescription: string = '';  // Adicionada esta propriedade
// //   private refreshSubscription: Subscription | undefined;

// //   constructor(private sellerService: SellerService) {}

// //   ngOnInit(): void {
// //     this.loadProducts();
// //     this.refreshSubscription = interval(120000).subscribe(() => this.loadProducts());
// //   }

// //   ngOnDestroy(): void {
// //     if (this.refreshSubscription) {
// //       this.refreshSubscription.unsubscribe();
// //     }
// //   }

// //   loadProducts(): void {
// //     this.sellerService.getAllProducts().subscribe(
// //       (data: Product[]) => {
// //         this.products = data;
// //         this.filteredProducts = data;
// //       },
// //       (error: any) => {
// //         console.error('Failed to load products', error);
// //       }
// //     );
// //   }

// //   searchProducts(): void {
// //     if (this.searchQuery.trim() === '') {
// //       this.filteredProducts = this.products;
// //     } else {
// //       this.sellerService.searchProducts(this.searchQuery).subscribe(
// //         (data: Product[]) => {
// //           this.filteredProducts = data.length ? data : this.products;
// //           this.showNewProductForm = !data.length;
// //         },
// //         (error: any) => {
// //           console.error('Failed to search products', error);
// //         }
// //       );
// //     }
// //   }

// //   editProductPrice(product: Product): void {
// //     this.editingProductPrice = { ...product };
// //     this.newProductPrice = null;
// //   }

// //   saveProductPrice(): void {
// //     if (this.editingProductPrice && this.newProductPrice !== null) {
// //       const priceData = { productId: this.editingProductPrice.id, priceValue: this.newProductPrice };
// //       this.sellerService.updateProductPrice(this.editingProductPrice.id, priceData).subscribe(
// //         () => {
// //           this.loadProducts();
// //           this.editingProductPrice = null;
// //           this.newProductPrice = null;
// //         },
// //         (error: any) => {
// //           console.error('Failed to save product price', error);
// //         }
// //       );
// //     }
// //   }

// //   cancelEditPrice(): void {
// //     this.editingProductPrice = null;
// //     this.newProductPrice = null;
// //   }

// //   registerNewProduct(): void {
// //     const newProduct = {
// //       name: this.newProductName,
// //       description: this.newProductDescription,
// //       userPrice: this.newProductPrice ?? 0
// //     };
// //     this.sellerService.createProduct(newProduct).subscribe(
// //       () => {
// //         this.loadProducts();
// //         this.cancelNewProductForm();
// //       },
// //       (error: any) => {
// //         console.error('Failed to create product', error);
// //       }
// //     );
// //   }

// //   cancelNewProductForm(): void {
// //     this.showNewProductForm = false;
// //     this.newProductName = '';
// //     this.newProductDescription = '';
// //     this.newProductPrice = null;
// //   }
// // }

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { SellerService } from './seller.service';
// import { Product } from '../types';
// import { Subscription, interval } from 'rxjs';

// @Component({
//   selector: 'app-seller-home',
//   templateUrl: './seller-home.component.html',
//   styleUrls: ['./seller-home.component.css']
// })
// export class SellerHomeComponent implements OnInit, OnDestroy {
//   products: Product[] = [];
//   filteredProducts: Product[] = [];
//   editingProductPrice: Product | null = null;
//   newProductPrice: number | null = null;
//   showNewProductForm: boolean = false;
//   searchQuery: string = '';
//   newProductName: string = '';
//   newProductDescription: string = '';
//   private refreshSubscription: Subscription | undefined;

//   constructor(private sellerService: SellerService) {}

//   ngOnInit(): void {
//     this.loadProducts();
//     this.refreshSubscription = interval(120000).subscribe(() => this.loadProducts());
//   }

//   ngOnDestroy(): void {
//     if (this.refreshSubscription) {
//       this.refreshSubscription.unsubscribe();
//     }
//   }

//   loadProducts(): void {
//     this.sellerService.getAllProducts().subscribe(
//       (data: Product[]) => {
//         this.products = data;
//         this.filteredProducts = data;
//       },
//       (error: any) => {
//         console.error('Failed to load products', error);
//       }
//     );
//   }

//   searchProducts(): void {
//     if (this.searchQuery.trim() === '') {
//       this.filteredProducts = this.products;
//       this.showNewProductForm = false;
//     } else {
//       this.sellerService.searchProducts(this.searchQuery).subscribe(
//         (data: Product[]) => {
//           this.filteredProducts = data.length ? data : [];
//           this.showNewProductForm = data.length === 0;
//         },
//         (error: any) => {
//           console.error('Failed to search products', error);
//         }
//       );
//     }
//   }

//   editProductPrice(product: Product): void {
//     this.editingProductPrice = { ...product };
//     this.newProductPrice = null;
//   }

//   saveProductPrice(): void {
//     if (this.editingProductPrice && this.newProductPrice !== null) {
//       const priceData = { productId: this.editingProductPrice.id, priceValue: this.newProductPrice };
//       this.sellerService.updateProductPrice(this.editingProductPrice.id, priceData).subscribe(
//         () => {
//           this.loadProducts();
//           this.editingProductPrice = null;
//           this.newProductPrice = null;
//         },
//         (error: any) => {
//           console.error('Failed to save product price', error);
//         }
//       );
//     }
//   }

//   cancelEditPrice(): void {
//     this.editingProductPrice = null;
//     this.newProductPrice = null;
//   }

//   registerNewProduct(): void {
//     const newProduct = {
//       name: this.newProductName,
//       description: this.newProductDescription,
//       userPrice: this.newProductPrice
//     };

//     this.sellerService.registerNewProduct(newProduct).subscribe(
//       () => {
//         this.loadProducts();
//         this.showNewProductForm = false;
//         this.newProductName = '';
//         this.newProductDescription = '';
//         this.newProductPrice = null;
//       },
//       (error: any) => {
//         console.error('Failed to register new product', error);
//       }
//     );
//   }

//   cancelNewProductForm(): void {
//     this.showNewProductForm = false;
//     this.newProductName = '';
//     this.newProductDescription = '';
//     this.newProductPrice = null;
//   }
// }
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { SellerService } from './seller.service';
// import { Product } from '../types';
// import { Subscription, interval } from 'rxjs';

// @Component({
//   selector: 'app-seller-home',
//   templateUrl: './seller-home.component.html',
//   styleUrls: ['./seller-home.component.css']
// })
// export class SellerHomeComponent implements OnInit, OnDestroy {
//   products: Product[] = [];
//   filteredProducts: Product[] = [];
//   searchQuery: string = '';
//   editingProductPrice: boolean = false;
//   editingProduct: Product | null = null;
//   newProductPrice: number | null = null;
//   showNewProductForm: boolean = false;
//   newProductName: string = '';
//   newProductDescription: string = '';
//   private refreshSubscription: Subscription | undefined;

//   constructor(private sellerService: SellerService) {}

//   ngOnInit(): void {
//     this.loadProducts();
//     this.refreshSubscription = interval(120000).subscribe(() => this.loadProducts());
//   }

//   ngOnDestroy(): void {
//     if (this.refreshSubscription) {
//       this.refreshSubscription.unsubscribe();
//     }
//   }

//   loadProducts(): void {
//     this.sellerService.getAllProducts().subscribe(
//       (data: Product[]) => {
//         this.products = data;
//         this.filteredProducts = data;
//       },
//       (error: any) => {
//         console.error('Failed to load products', error);
//       }
//     );
//   }

//   searchProducts(): void {
//     const query = this.searchQuery.toLowerCase();
//     this.filteredProducts = this.products.filter(product =>
//       product.name.toLowerCase().includes(query) ||
//       product.description.toLowerCase().includes(query)
//     );
//   }

//   editProductPrice(product: Product): void {
//     this.editingProductPrice = true;
//     this.editingProduct = product;
//     this.newProductPrice = product.userPrice;
//   }

//   saveProductPrice(): void {
//     if (this.editingProduct && this.newProductPrice !== null) {
//       const priceUpdate = {
//         productId: this.editingProduct.id,
//         priceValue: this.newProductPrice
//       };
//       this.sellerService.updateProductPrice(this.editingProduct.id, priceUpdate).subscribe({
//         next: () => {
//           this.editingProduct!.userPrice = this.newProductPrice!;
//           this.editingProduct = null;
//           this.editingProductPrice = false;
//           this.newProductPrice = null;
//         },
//         error: (err: any) => {
//           console.error('Failed to update price', err);
//           this.editingProduct = null;
//           this.editingProductPrice = false;
//           this.newProductPrice = null;
//         }
//       });
//     }
//   }

//   cancelEditPrice(): void {
//     this.editingProductPrice = false;
//     this.editingProduct = null;
//     this.newProductPrice = null;
//   }

//   registerNewProduct(): void {
//     const newProduct = {
//       name: this.newProductName,
//       description: this.newProductDescription,
//       userPrice: this.newProductPrice || 0
//     };
//     this.sellerService.registerNewProduct(newProduct).subscribe({
//       next: () => {
//         this.showNewProductForm = false;
//         this.loadProducts();
//         this.newProductName = '';
//         this.newProductDescription = '';
//         this.newProductPrice = null;
//       },
//       error: (err: any) => {
//         console.error('Failed to register new product', err);
//       }
//     });
//   }

//   cancelNewProductForm(): void {
//     this.showNewProductForm = false;
//     this.newProductName = '';
//     this.newProductDescription = '';
//     this.newProductPrice = null;
//   }
// }

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { SellerService } from './seller.service';
// import { Product } from '../types';
// import { Subscription, interval } from 'rxjs';

// @Component({
//   selector: 'app-seller-home',
//   templateUrl: './seller-home.component.html',
//   styleUrls: ['./seller-home.component.css']
// })
// export class SellerHomeComponent implements OnInit, OnDestroy {
//   products: Product[] = [];
//   filteredProducts: Product[] = [];
//   searchQuery: string = '';
//   newProductName: string = '';
//   newProductDescription: string = '';
//   newProductPrice: number | null = null;
//   showNewProductForm: boolean = false;
//   editingProductPrice: boolean = false;
//   editingProductIndex: number | null = null;
//   private refreshSubscription: Subscription | undefined;

//   constructor(private sellerService: SellerService) {}

//   ngOnInit(): void {
//     this.loadProducts();
//     this.refreshSubscription = interval(120000).subscribe(() => this.loadProducts());
//   }

//   ngOnDestroy(): void {
//     if (this.refreshSubscription) {
//       this.refreshSubscription.unsubscribe();
//     }
//   }

//   loadProducts(): void {
//     this.sellerService.getAllProducts().subscribe({
//       next: (data: Product[]) => {
//         this.products = data;
//         this.filteredProducts = data;
//       },
//       error: (err: any) => {
//         console.error('Failed to load products', err);
//       }
//     });
//   }

//   searchProducts(): void {
//     if (this.searchQuery.trim() === '') {
//       this.filteredProducts = this.products;
//     } else {
//       const query = this.searchQuery.toLowerCase();
//       this.filteredProducts = this.products.filter(product =>
//         product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
//       );
//     }
//   }

//   editProductPrice(index: number): void {
//     this.editingProductIndex = index;
//     this.editingProductPrice = true;
//     this.newProductPrice = this.filteredProducts[index].userPrice;
//   }

//   cancelEditPrice(): void {
//     this.editingProductIndex = null;
//     this.editingProductPrice = false;
//     this.newProductPrice = null;
//   }

//   saveProductPrice(): void {
//     if (this.editingProductIndex !== null && this.newProductPrice !== null) {
//       const product = this.filteredProducts[this.editingProductIndex];
//       const price = { productId: product.id, priceValue: this.newProductPrice };
//       this.sellerService.updateProductPrice(product.id, price).subscribe({
//         next: () => {
//           product.userPrice = this.newProductPrice!;
//           this.cancelEditPrice();
//         },
//         error: (err: any) => {
//           console.error('Failed to update product price', err);
//         }
//       });
//     }
//   }

//   registerNewProduct(): void {
//     const newProduct = {
//       name: this.newProductName,
//       description: this.newProductDescription,
//       userPrice: this.newProductPrice
//     };
//     this.sellerService.addProduct(newProduct).subscribe({
//       next: (product: Product) => {
//         this.products.push(product);
//         this.filteredProducts = this.products;
//         this.cancelNewProductForm();
//       },
//       error: (err: any) => {
//         console.error('Failed to register new product', err);
//       }
//     });
//   }

//   cancelNewProductForm(): void {
//     this.showNewProductForm = false;
//     this.newProductName = '';
//     this.newProductDescription = '';
//     this.newProductPrice = null;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { SellerService } from "./seller.service";
import { Product } from "../types";

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  editingProductIndex: number | null = null;
  newProductPrice: number = 0;
  newProductName: string = '';
  newProductDescription: string = '';
  showNewProductForm: boolean = false;

  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    this.loadProducts();
    setInterval(() => this.loadProducts(), 120000); // Update every 2 minutes
  }

  loadProducts(): void {
    this.sellerService.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filteredProducts = data;
      },
      error: (err) => {
        console.error('Failed to load products', err);
      }
    });
  }

  searchProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter(
      product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }

  editProductPrice(index: number): void {
    this.editingProductIndex = index;
    this.newProductPrice = this.filteredProducts[index].userPrice || 0; // Ensure it's a number
  }

  saveProductPrice(): void {
    if (this.editingProductIndex !== null) {
      const product = this.filteredProducts[this.editingProductIndex];
      const priceUpdate = { productId: product.id, priceValue: this.newProductPrice };
      this.sellerService.updateProductPrice(product.id, priceUpdate).subscribe({
        next: () => {
          product.userPrice = this.newProductPrice;
          this.cancelEditPrice();
        },
        error: (err) => {
          console.error('Failed to update product price', err);
        }
      });
    }
  }

  cancelEditPrice(): void {
    this.editingProductIndex = null;
    this.newProductPrice = 0;
  }

  registerNewProduct(): void {
    const newProduct = {
      name: this.newProductName,
      description: this.newProductDescription,
      userPrice: this.newProductPrice || 0
    };
    this.sellerService.addProduct(newProduct).subscribe({
      next: (data: Product) => {
        this.products.push(data);
        this.filteredProducts.push(data);
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
    this.newProductPrice = 0;
  }
}

