import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  fullname: string = '';
  email: string = '';
  password: string = '';
  city: string = '';
  state: string = '';
  role: string = 'USER';
  showSuccessMessage: boolean = false;
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const user = {
      username: this.username,
      fullname: this.fullname,
      email: this.email,
      passwordHash: this.password,
      city: this.city,
      state: this.state,
      role: this.role
    };

    this.http.post('http://localhost:8080/users/register', user).subscribe(
      (response: any) => {
        this.showSuccessMessage = true;
        this.successMessage = `Usuário ${this.username} cadastrado com sucesso! Volte à página de Login e inicie sua jornada!`;
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
  }
}
