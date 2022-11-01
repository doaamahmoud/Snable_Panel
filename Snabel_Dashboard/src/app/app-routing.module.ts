import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticelComponent } from './articel/articel.component';
import { BranchComponent } from './branch/branch.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NewletterComponent } from './newletter/newletter.component';
import { ProductComponent } from './product/product.component';
import { SupCategoryComponent } from './sup-category/sup-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },   
    {path:'Category',component:CategoryComponent},
    {path:'Supcategory',component:SupCategoryComponent},
    {path:'Product', component:ProductComponent},
    {path:'Branch',component:BranchComponent},
    {path:'Article', component:ArticelComponent},
    {path:'NewLetter', component:NewletterComponent},
    {path:'Employee', component:EmployeeComponent},
    {path:'**',redirectTo:'/Home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
