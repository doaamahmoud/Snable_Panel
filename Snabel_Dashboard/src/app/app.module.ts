import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CategoryComponent } from './category/category.component';
import { SupCategoryComponent } from './sup-category/sup-category.component';
import { ProductComponent } from './product/product.component';
import { NewletterComponent } from './newletter/newletter.component';
import { ArticelComponent } from './articel/articel.component';
import { EmployeeComponent } from './employee/employee.component';
import { BranchComponent } from './branch/branch.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    CategoryComponent,
    SupCategoryComponent,
    ProductComponent,
    NewletterComponent,
    ArticelComponent,
    EmployeeComponent,
    BranchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
