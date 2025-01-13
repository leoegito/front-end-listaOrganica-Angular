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
import { AdminProductComponent } from './admin-product/admin-product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerService } from './seller-home/seller.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    ProductListDetailsComponent,
    AdminComponent,
    AdminProductComponent,
    SellerHomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, ShoppingListService, AdminService, SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
