import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Modal } from 'bootstrap';
import { CategoryService } from 'src/app/Services/category.service';
import { Icategory } from 'src/app/ViewModels/icategory';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']

})
export class CategoryComponent implements OnInit{
  closeResult = '';
  CategorytList:Icategory[] | undefined;
  testmodel:Modal| undefined
  oldCategory: Icategory={} as Icategory;
  // id:number=0;
  constructor( private CategoerService:CategoryService, private modalService: NgbModal, private router:Router) {
    this.CategorytList=[];

   }

  ngOnInit(): void {
    this.CategoerService.getAllCateogories().subscribe(data=>{
      this.CategorytList=data;

    });
  }

  open(content : any,category:Icategory) {
    this.oldCategory.name=category.name;
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
    console.log(category);
    this.CategoerService.UpdateCategory(category.id, category).subscribe(prd=>{
      this.router.navigate(['/Home']);
    });
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  
  }
  openToDelete(content : any) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
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

