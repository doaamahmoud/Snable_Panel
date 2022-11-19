import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Modal } from 'bootstrap';
import { CategoryService } from 'src/app/Services/category.service';
import { SupcategoryService } from 'src/app/Services/supcategory.service';
import { ISupcategory } from 'src/app/ViewModels/i-supcategory';
import { Icategory } from 'src/app/ViewModels/icategory';
@Component({
  selector: 'app-sup-category',
  templateUrl: './sup-category.component.html',
  styleUrls: ['./sup-category.component.scss']
})
export class SupCategoryComponent implements OnInit {

  closeResult = '';
  FilterSupCategorytList:ISupcategory[] | undefined;
  CategorytList:Icategory[] | undefined;
  testmodel:Modal| undefined
  oldSupCategory: ISupcategory={} as ISupcategory;
  NewSupCategory:ISupcategory={} as ISupcategory;
  selectedCatID:number=0;

  constructor( private SupCategoerService:SupcategoryService,private CategoryService:CategoryService, private modalService: NgbModal, private router:Router) {
    this.FilterSupCategorytList=[];

   }

  ngOnInit(): void {
    this.CategoryService.getAllCateogories().subscribe(data=>{
      this.CategorytList=data;
    });
    this.SupCategoerService.getAllSupCateogories().subscribe(data=>{
      this.FilterSupCategorytList=data;
    });

  }

  showSupCategory(Catid:string){
    console.log(+Catid);
    this.SupCategoerService.getSupCategoryByCategoryID(+Catid).subscribe(data=>{
      this.FilterSupCategorytList=data;
      console.log(this.FilterSupCategorytList);
    });
    if(this.selectedCatID==0){
      this.SupCategoerService.getAllSupCateogories().subscribe(data=>{
        this.FilterSupCategorytList=data;
      });
    }
  }

  AddNewSupCategory(content:any){

    this.modalService.open(content,
      {ariaLabelledBy: 'modal-Add-title'}).result.then((result)  => {
        this.SupCategoerService.addSupCategory(this.NewSupCategory).subscribe(prd=>{
          console.log(this.NewSupCategory)
          this.router.navigate(['/Home']);
        });

         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = 
            `Dismissed ${this.getDismissReason(reason)}`;
       });
  }


  open(content : any,Supcategory:ISupcategory) {
    this.oldSupCategory.name=Supcategory.name;
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
    console.log(Supcategory);
    console.log(result);
    this.SupCategoerService.UpdateSupCategory(Supcategory.id, this.oldSupCategory).subscribe(prd=>{
      this.router.navigate(['/Home']);
      console.log(Supcategory);

    });
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  
  }
  openToDelete(content : any, Supcategory:ISupcategory) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-Delete-title'}).result.then((result)  => {
   
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.SupCategoerService.DeleteSupCategory(Supcategory.id).subscribe(prd=>{
        console.log(Supcategory.id)
        this.router.navigate(['/Home']);
      });
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
