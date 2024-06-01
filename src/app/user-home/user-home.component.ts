import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  shoppingLists: any[] = [];
  userID: string = '1'; // Altere para obter o ID do usuário logado

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.loadShoppingLists();
  }

  loadShoppingLists(): void {
    this.shoppingListService.getUserShoppingLists(this.userID).subscribe({
      next: (data) => {
        this.shoppingLists = data;
      },
      error: (err) => {
        console.error('Failed to load shopping lists', err);
      }
    });
  }
}
