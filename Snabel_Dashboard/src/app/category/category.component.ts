import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../Services/category.service';
import { Icategory } from '../ViewModels/icategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  newCategory:Icategory={} as Icategory;
  selectedCatID:number;
  CatList:Icategory[];
  fav_select:number=0;
  updateProduct:Icategory|undefined=undefined;
  constructor( private CategoryService:CategoryService,private router:Router) {
    this.CatList=[];
    this.selectedCatID=0;
   }

  ngOnInit(): void {
  this.CategoryService.getAllCateogories().subscribe(data=>{
    console.log(data);
    this.CatList=data;
   
  })
}
  saveCategory(){
    console.log(this.newCategory);
    // this.CategoryService.addCategory(this.newCategory).subscribe(prd=>{
    //    this.router.navigate(['']);
    //   // console.log(this.newCategory);
    // });
  }
DeleteCategory(id:number){
  this.CategoryService.DeleteCategory(id).subscribe();
}
UpdateCategory(){
    this.UpdateCategory=this.CategoryService.(this.CurprdId);
}
}
