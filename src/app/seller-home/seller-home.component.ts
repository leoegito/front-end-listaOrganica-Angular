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

