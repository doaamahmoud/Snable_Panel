import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './Components/article/article.component';
import { BodyComponent } from './Components/body/body.component';
import { BranchComponent } from './Components/branch/branch.component';
import { CategoryComponent } from './Components/category/category.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/login/login.component';
import { NewsLetterComponent } from './Components/news-letter/news-letter.component';
import { ProductComponent } from './Components/product/product.component';
import { SupCategoryComponent } from './Components/sup-category/sup-category.component';

const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'',component:LayoutComponent, children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:BodyComponent},
    {path:'Category', component:CategoryComponent},
    {path:'Branch',component:BranchComponent},
    {path:'Employee', component:EmployeeComponent},
    {path:'NewLetter', component:NewsLetterComponent},
    {path:'Article', component:ArticleComponent},
    {path:'SupCategory', component:SupCategoryComponent},
    {path:'Product', component:ProductComponent}
  ]},
  {path:'Login',component:LoginComponent},
     {path:'**',redirectTo:'/Home'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
