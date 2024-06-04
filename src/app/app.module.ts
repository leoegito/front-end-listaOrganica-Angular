// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { UserHomeComponent } from './user-home/user-home.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     UserHomeComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ShoppingListService } from './shopping-list.service';
import { ProductListDetailsComponent } from './product-list-details/product-list-details.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    ProductListDetailsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, ShoppingListService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
