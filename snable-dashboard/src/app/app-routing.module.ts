import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './Components/article/article.component';
import { BranchComponent } from './Components/branch/branch.component';
import { CategoryComponent } from './Components/category/category.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NewsLetterComponent } from './Components/news-letter/news-letter.component';

const routes: Routes = [
  {path:'',component:LayoutComponent, children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent}, 
    {path:'Category', component:CategoryComponent},
    {path:'Branch',component:BranchComponent},
    {path:'Employee', component:EmployeeComponent},
    {path:'NewLetter', component:NewsLetterComponent},
    {path:'Article', component:ArticleComponent}
  ]},
    {path:'**',redirectTo:'/Home'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
