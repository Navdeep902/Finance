import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './products/list-products.component';
import { RegisterService } from './services/register.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmiTenuresComponent } from './emi-tenures/emi-tenures.component';
import { from } from 'rxjs';
import { ProductService } from './services/product.service';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { EMICardService } from './services/emicard.service';

const appRoutes: Routes = [
  { path:'list', component: ListProductsComponent },
  { path:'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tenure/:id', component: EmiTenuresComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    LoginComponent,
    DashboardComponent,
    EmiTenuresComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EMICardService, ProductService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
