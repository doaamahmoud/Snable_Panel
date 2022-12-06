import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/i-product';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Modal } from 'bootstrap';
import { ISupcategory } from 'src/app/ViewModels/i-supcategory';
import { SupcategoryService } from 'src/app/Services/supcategory.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  closeResult = '';
  FilterProductstList:IProduct[] | undefined;
  SupCategorytList:ISupcategory[] | undefined;
  testmodel:Modal| undefined
  oldProduct: IProduct={} as IProduct;
  NewProduct:IProduct={} as IProduct;
  selectedSupCatID:number=0;
  image: any;
  constructor( private SupCategoerService:SupcategoryService,private ProductService:ProductService, private modalService: NgbModal, private router:Router) {
    this.FilterProductstList=[];

   }

  ngOnInit(): void {
    this.SupCategoerService.getAllSupCateogories().subscribe(data=>{
      this.SupCategorytList=data;
    });
    this.ProductService.getAllProducts().subscribe(data=>{
      this.FilterProductstList=data;
    });

  }

  onFileChange(event:any){
    this.image = event.target.files;
    console.log(event);
  }

  showProducts(SupCatid:string){
    console.log(+SupCatid);
    this.ProductService.getProductsBySupCategoryID(+SupCatid).subscribe(data=>{
      this.FilterProductstList=data;
 
    });
    if(this.selectedSupCatID==0){
      this.ProductService.getAllProducts().subscribe(data=>{
        this.FilterProductstList=data;
      });
    }
  }

  AddNewProduct(content:any){

    this.modalService.open(content,
      {ariaLabelledBy: 'modal-Add-title'}).result.then((result)  => {
        this.ProductService.addProduct(this.NewProduct).subscribe(prd=>{
          console.log(this.NewProduct)
          this.router.navigate(['/Home']);
        });

         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = 
            `Dismissed ${this.getDismissReason(reason)}`;
       });
  }


  open(content : any,product:IProduct) {
    this.oldProduct.name=product.name;
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {;
    this.ProductService.UpdateProduct(product.id, this.oldProduct).subscribe(prd=>{
      this.router.navigate(['/Home']);

    });
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  
  }
  openToDelete(content : any, product:IProduct) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-Delete-title'}).result.then((result)  => {
   
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.ProductService.DeleteProduct(product.id).subscribe(prd=>{
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
