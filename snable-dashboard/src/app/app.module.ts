import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './Components/category/category.component';
import { HomeComponent } from './Components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './Components/layout/layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BranchComponent } from './Components/branch/branch.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { NewsLetterComponent } from './Components/news-letter/news-letter.component';
import { ArticleComponent } from './Components/article/article.component';
import { BannerComponent } from './Components/banner/banner.component';
import { SupCategoryComponent } from './Components/sup-category/sup-category.component';
import { ProductComponent } from './Components/product/product.component';
import { BodyComponent } from './Components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    LayoutComponent,
    BranchComponent,
    EmployeeComponent,
    NewsLetterComponent,
    ArticleComponent,
    BannerComponent,
    SupCategoryComponent,
    ProductComponent,
    BodyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
