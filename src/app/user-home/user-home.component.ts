import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ProductList, Product, ListItem } from '../types';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  shoppingLists: ProductList[] = [];
  userId: number | null = null;
  newListTitle: string = '';
  showNewListForm: boolean = false;
  loadingProducts: Set<number> = new Set(); // Rastreia os produtos que estão sendo carregados

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.userId !== null) {
      this.loadShoppingLists();
    } else {
      console.error('User ID is null. User might not be authenticated.');
    }
  }

  loadShoppingLists(): void {
    if (this.userId !== null) {
      this.shoppingListService.getShoppingLists(this.userId).subscribe(
        (data: ProductList[]) => {
          this.debugData(data); // Adicionado para depuração
          this.shoppingLists = data;
          this.checkProductsNames();
        },
        (error) => {
          console.error('Failed to load shopping lists', error);
        }
      );
    }
  }

  checkProductsNames(): void {
    for (let list of this.shoppingLists) {
      for (let item of list.listItems) {
        if (!item.id.product.name) {
          const productId = item.id.product.id || item.product;
          this.fetchProductName(productId, item);
        }
      }
    }
  }

  fetchProductName(productId: number, item: ListItem): void {
    if (!this.loadingProducts.has(productId)) {
      this.loadingProducts.add(productId);
      this.shoppingListService.getProduct(productId).subscribe(
        (data: Product) => {
          item.id.product = data;
          this.loadingProducts.delete(productId);
        },
        (error) => {
          console.error(`Failed to load product name for product ID ${productId}`, error);
          this.loadingProducts.delete(productId);
        }
      );
    }
  }

  deleteShoppingList(listId: number): void {
    if (this.userId !== null) {
      this.shoppingListService.deleteShoppingList(this.userId, listId).subscribe(
        () => {
          this.shoppingLists = this.shoppingLists.filter(list => list.id !== listId);
        },
        (error) => {
          console.error('Failed to delete shopping list', error);
        }
      );
    }
  }

  viewDetails(listID: number): void {
    this.router.navigate(['/product-list-details', listID]);
  }

  toggleNewListForm(): void {
    this.showNewListForm = !this.showNewListForm;
  }

  createShoppingList(): void {
    if (this.newListTitle.trim() === '') {
      console.log('New list title is empty');
      return;
    }

    this.shoppingListService.createShoppingList(this.newListTitle).subscribe(
      response => {
        if (response.status === 201) {
          const location = response.headers.get('Location');
          const listId = location ? parseInt(location.split('/').pop() || '', 10) : null;
          if (listId && this.userId !== null) {
            this.shoppingListService.associateShoppingListWithUser(this.userId, listId).subscribe(
              () => {
                this.loadShoppingLists();
                this.showNewListForm = false;
                this.newListTitle = '';
              },
              error => console.error('Failed to associate shopping list with user', error)
            );
          }
        }
      },
      error => console.error('Failed to create shopping list', error)
    );
  }

  getTotalValue(list: ProductList): number {
    return list.listItems.reduce((sum, item) => sum + item.subTotal, 0);
  }

  debugData(data: ProductList[]): void {
    console.log('Received data:', JSON.stringify(data, null, 2));
  }
}
