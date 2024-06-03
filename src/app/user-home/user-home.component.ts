// import { Component, OnInit } from '@angular/core';
// import { ShoppingListService } from '../shopping-list.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-user-home',
//   templateUrl: './user-home.component.html',
//   styleUrls: ['./user-home.component.css']
// })
// export class UserHomeComponent implements OnInit {
//   shoppingLists: any[] = [];
//   userID: number = 1; // Altere para obter o ID do usuário logado

//   constructor(private shoppingListService: ShoppingListService, private router: Router) { }

//   ngOnInit(): void {
//     if (typeof window !== 'undefined' && sessionStorage.getItem('token')) {
//       this.loadShoppingLists();
//     } else {
//       console.error('No valid session found');
//     }
//   }

//   loadShoppingLists(): void {
//     this.shoppingListService.getUserShoppingLists(this.userID.toString()).subscribe({
//       next: (data) => {
//         this.shoppingLists = data;
//       },
//       error: (err) => {
//         console.error('Failed to load shopping lists', err);
//       }
//     });
//   }

//   viewDetails(listID: number): void {
//     this.router.navigate(['/product-list-details', listID]);
//   }
// }
// user-home.component.ts
//////////////////////////
// import { Component, OnInit } from '@angular/core';
// import { ShoppingListService } from '../shopping-list.service';
// import { Router } from '@angular/router';
// import { ProductList } from '../types';

// @Component({
//   selector: 'app-user-home',
//   templateUrl: './user-home.component.html',
//   styleUrls: ['./user-home.component.css']
// })
// export class UserHomeComponent implements OnInit {
//   shoppingLists: ProductList[] = [];
//   userID: number = 1; // Altere para obter o ID do usuário logado

//   constructor(private shoppingListService: ShoppingListService, private router: Router) { }

//   ngOnInit(): void {
//     if (typeof window !== 'undefined' && sessionStorage.getItem('token')) {
//       this.loadShoppingLists();
//     } else {
//       console.error('No valid session found');
//     }
//   }

//   loadShoppingLists(): void {
//     this.shoppingListService.getUserShoppingLists(this.userID.toString()).subscribe({
//       next: (data) => {
//         this.shoppingLists = data;
//       },
//       error: (err) => {
//         console.error('Failed to load shopping lists', err);
//       }
//     });
//   }

//   deleteShoppingList(listID: number): void {
//     this.shoppingListService.deleteShoppingList(this.userID.toString(), listID.toString()).subscribe({
//       next: () => {
//         this.shoppingLists = this.shoppingLists.filter(list => list.id !== listID);
//       },
//       error: (err) => {
//         console.error('Failed to delete shopping list', err);
//       }
//     });
//   }

//   viewDetails(listID: number): void {
//     this.router.navigate(['/product-list-details', listID]);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ShoppingListService } from '../shopping-list.service';
// import { ProductList } from '../types';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-user-home',
//   templateUrl: './user-home.component.html',
//   styleUrls: ['./user-home.component.css']
// })
// export class UserHomeComponent implements OnInit {
//   shoppingLists: ProductList[] = [];
//   userId: number = 1; // Supondo que o userId seja obtido de outra forma, por exemplo, autenticação
//   newListTitle: string = '';
//   showNewListForm: boolean = false;

//   constructor(private shoppingListService: ShoppingListService, private router: Router) { }

//   ngOnInit(): void {
//     this.loadShoppingLists();
//   }

//   loadShoppingLists(): void {
//     this.shoppingListService.getShoppingLists(this.userId).subscribe(
//       (data: ProductList[]) => {
//         this.debugData(data); // Adicionado para depuração
//         this.shoppingLists = data;
//       },
//       (error) => {
//         console.error('Failed to load shopping lists', error);
//       }
//     );
//   }

//   deleteShoppingList(listId: number): void {
//     this.shoppingListService.deleteShoppingList(this.userId, listId).subscribe(
//       () => {
//         this.shoppingLists = this.shoppingLists.filter(list => list.id !== listId);
//       },
//       (error) => {
//         console.error('Failed to delete shopping list', error);
//       }
//     );
//   }

//   viewDetails(listID: number): void {
//     console.log('Navigating to details for list ID', listID);
//     this.router.navigate(['/product-list-details', listID]);
//   }

//   debugData(data: ProductList[]): void {
//     console.log('Received data:', JSON.stringify(data, null, 2));
//   }

//   toggleNewListForm(): void {
//     this.showNewListForm = !this.showNewListForm;
//   }

//   createShoppingList(): void {
//     if (this.newListTitle.trim() === '') {
//       console.log('New list title is empty');
//       return;
//     }

//     this.shoppingListService.createShoppingList(this.newListTitle).subscribe(
//       response => {
//         console.log('Response from creating shopping list:', response);
//         if (response.status === 201) {
//           console.log('Shopping list created:', response);
//           const location = response.headers.get('Location');
//           console.log('Location header: ', location);
//           console.log('All headers: ', response.headers);
//           // console.log('Location com header.get: ', response.header.get('Location'));
//           const listId = location ? parseInt(location.split('/').pop() || '', 10) : null;
//           console.log('ListID: ',listId);
//           if (listId) {
//             console.log('Associating shopping list with user, listId:', listId);
//             this.shoppingListService.associateShoppingListWithUser(this.userId, listId).subscribe(
//               () => {
//                 console.log('Shopping list associated with user');
//                 this.loadShoppingLists();
//                 this.showNewListForm = false;
//                 this.newListTitle = '';
//               },
//               error => console.error('Failed to associate shopping list with user', error)
//             );
//           }
//         }
//       },
//       error => console.error('Failed to create shopping list', error)
//     );
//   }

//   getTotalValue(list: ProductList): number {
//     return list.listItems.reduce((sum, item) => sum + item.subTotal, 0);
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { ShoppingListService } from '../shopping-list.service';
// import { ProductList } from '../types';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-user-home',
//   templateUrl: './user-home.component.html',
//   styleUrls: ['./user-home.component.css']
// })
// export class UserHomeComponent implements OnInit {
//   shoppingLists: ProductList[] = [];
//   userId: number | null = null;
//   newListTitle: string = '';
//   showNewListForm: boolean = false;

//   constructor(
//     private shoppingListService: ShoppingListService,
//     private router: Router,
//     private authService: AuthService
//   ) { }

//   ngOnInit(): void {
//     this.userId = this.authService.getUserId();
//     if (this.userId !== null) {
//       this.loadShoppingLists();
//     } else {
//       console.error('User ID not found');
//       this.router.navigate(['/login']);
//     }
//   }

//   loadShoppingLists(): void {
//     if (this.userId !== null) {
//       this.shoppingListService.getShoppingLists(this.userId).subscribe(
//         (data: ProductList[]) => {
//           this.debugData(data);
//           this.shoppingLists = data;
//         },
//         (error) => {
//           console.error('Failed to load shopping lists', error);
//         }
//       );
//     }
//   }

//   deleteShoppingList(listId: number): void {
//     if (this.userId !== null) {
//       this.shoppingListService.deleteShoppingList(this.userId, listId).subscribe(
//         () => {
//           this.shoppingLists = this.shoppingLists.filter(list => list.id !== listId);
//         },
//         (error) => {
//           console.error('Failed to delete shopping list', error);
//         }
//       );
//     }
//   }

//   viewDetails(listID: number): void {
//     console.log('Navigating to details for list ID', listID);
//     this.router.navigate(['/product-list-details', listID]);
//   }

//   debugData(data: ProductList[]): void {
//     console.log('Received data:', JSON.stringify(data, null, 2));
//   }

//   toggleNewListForm(): void {
//     this.showNewListForm = !this.showNewListForm;
//   }

//   createShoppingList(): void {
//     if (this.newListTitle.trim() === '') {
//       console.log('New list title is empty');
//       return;
//     }

//     if (this.userId !== null) {
//       this.shoppingListService.createShoppingList(this.newListTitle).subscribe(
//         response => {
//           console.log('Response from creating shopping list:', response);
//           if (response.status === 201) {
//             console.log('Shopping list created:', response);
//             const location = response.headers.get('Location');
//             console.log('Location header: ', location);
//             console.log('All headers: ', response.headers);
//             const listId = location ? parseInt(location.split('/').pop() || '', 10) : null;
//             console.log('ListID: ', listId);
//             if (listId !== null && this.userId !== null) {
//               console.log('Associating shopping list with user, listId:', listId);
//               this.shoppingListService.associateShoppingListWithUser(this.userId, listId).subscribe(
//                 () => {
//                   console.log('Shopping list associated with user');
//                   this.loadShoppingLists();
//                   this.showNewListForm = false;
//                   this.newListTitle = '';
//                 },
//                 error => console.error('Failed to associate shopping list with user', error)
//               );
//             }
//           }
//         },
//         error => console.error('Failed to create shopping list', error)
//       );
//     }
//   }

//   getTotalValue(list: ProductList): number {
//     return list.listItems.reduce((sum, item) => sum + item.subTotal, 0);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ProductList } from '../types';
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

  constructor(private shoppingListService: ShoppingListService, private router: Router, private authService: AuthService) { }

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
        },
        (error) => {
          console.error('Failed to load shopping lists', error);
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
    console.log('Navigating to details for list ID', listID);
    this.router.navigate(['/product-list-details', listID]);
  }

  debugData(data: ProductList[]): void {
    console.log('Received data:', JSON.stringify(data, null, 2));
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
        console.log('Response from creating shopping list:', response);
        if (response.status === 201) {
          console.log('Shopping list created:', response);
          const location = response.headers.get('Location');
          console.log('Location header: ', location);
          console.log('All headers: ', response.headers);
          const listId = location ? parseInt(location.split('/').pop() || '', 10) : null;
          console.log('ListID: ', listId);
          if (listId && this.userId !== null) {
            console.log('Associating shopping list with user, listId:', listId);
            this.shoppingListService.associateShoppingListWithUser(this.userId, listId).subscribe(
              () => {
                console.log('Shopping list associated with user');
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
}
