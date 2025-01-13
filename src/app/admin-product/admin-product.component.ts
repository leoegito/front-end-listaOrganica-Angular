import { Component, OnInit } from '@angular/core';
import { Product } from '../types';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  products: Product[] = [];
  editingProduct: Product | null = null;
  editingProductPrice: Product | null = null;
  newProductPrice: number | null = null;
  filteredProducts: Product[] = [];
  searchQuery: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.adminService.getAllProducts().subscribe({
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

  editProduct(product: Product): void {
    this.editingProduct = { ...product };
    this.editingProductPrice = null;
  }

  editProductPrice(product: Product): void {
    this.editingProductPrice = { ...product };
    this.editingProduct = null;
  }

  saveProduct(): void {
    if (this.editingProduct) {
      this.adminService.updateProduct(this.editingProduct.id, {
        name: this.editingProduct.name,
        description: this.editingProduct.description
      }).subscribe(
        (data: Product) => {
          const index = this.products.findIndex(p => p.id === data.id);
          if (index !== -1) {
            this.products[index] = data;
            this.filteredProducts[index] = data; // Update filteredProducts as well
          }
          this.editingProduct = null;
        },
        (error) => {
          console.error('Failed to save product', error);
        }
      );
    }
  }

  saveProductPrice(): void {
    if (this.editingProductPrice && this.newProductPrice !== null) {
      this.adminService.updateProductPrice(this.editingProductPrice.id, {
        productId: this.editingProductPrice.id,
        priceValue: this.newProductPrice
      }).subscribe(
        () => {
          this.loadProducts();
          this.editingProductPrice = null;
          this.newProductPrice = null;
        },
        (error) => {
          console.error('Failed to save product price', error);
        }
      );
    }
  }

  cancelEdit(): void {
    this.editingProduct = null;
  }

  cancelEditPrice(): void {
    this.editingProductPrice = null;
    this.newProductPrice = null;
  }

  deleteProduct(productId: number): void {
    this.adminService.deleteProduct(productId).subscribe(
      () => {
        this.products = this.products.filter(product => product.id !== productId);
        this.filteredProducts = this.filteredProducts.filter(product => product.id !== productId);
      },
      (error) => {
        console.error('Failed to delete product', error);
      }
    );
  }
}
