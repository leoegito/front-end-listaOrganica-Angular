// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { UserHomeComponent } from './user-home/user-home.component';
// import { AuthGuard } from './auth.guard';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'user', component: UserHomeComponent, canActivate: [AuthGuard] },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProductListDetailsComponent } from './product-list-details/product-list-details.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'product-list-details/:id', component: ProductListDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
