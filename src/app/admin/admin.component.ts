import { Component, OnInit } from '@angular/core';
import { MyUser } from '../types';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: MyUser[] = [];
  editingUser: MyUser | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getUsers().subscribe(users => {
      this.users = users;
    });
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
