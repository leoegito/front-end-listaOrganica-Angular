import { Component, OnInit } from '@angular/core';
import { MyUser, Product } from '../types';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: MyUser[] = [];
  products: Product[] = [];
  editingUser: MyUser | null = null;
  showUserList: boolean = true;
  showProductList: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  loadProducts(): void {
    this.adminService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  showUsers(): void {
    this.showUserList = true;
    this.showProductList = false;
  }

  showProducts(): void {
    this.showUserList = false;
    this.showProductList = true;
  }

  editUser(user: MyUser): void {
    this.editingUser = { ...user };
  }

  saveUser(): void {
    if (this.editingUser) {
      this.adminService.updateUser(this.editingUser).subscribe(() => {
        this.loadUsers();
        this.editingUser = null;
      });
    }
  }

  deleteUser(userId: number): void {
    this.adminService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
    });
  }

  cancelEdit(): void {
    this.editingUser = null;
  }
}
