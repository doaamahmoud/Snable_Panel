import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent, children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent}, 
    {path:'Category', component:CategoryComponent}
  ]},
    {path:'**',redirectTo:'/Home'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
