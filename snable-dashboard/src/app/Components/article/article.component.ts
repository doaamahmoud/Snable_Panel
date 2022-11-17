import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { Iarticle } from 'src/app/ViewModels/iarticle';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Carousel, Modal } from 'bootstrap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  closeResult = '';
  ArticleList:Iarticle[] | undefined;
  testmodel:Modal| undefined
  oldArticle: Iarticle={} as Iarticle;
  NewArticle:Iarticle={} as Iarticle;
  constructor(private ArticleService:ArticleService, private modalService: NgbModal, private router:Router,  private San:DomSanitizer) { 
    this.ArticleList=[];
  }

  ngOnInit(): void {
    this.ArticleService.getAllArticles().subscribe(data=>{
      this.ArticleList=data;
    this.ArticleList.forEach(element => {
      element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
    });
  })
} 

AddNewArticle(content:any){
  this.modalService.open(content,
    {ariaLabelledBy: 'modal-Add-title'}).result.then((result)  => {
      this.ArticleService.addArticle(this.NewArticle).subscribe(prd=>{
        this.router.navigate(['/Home']);
      });
      
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = 
          `Dismissed ${this.getDismissReason(reason)}`;
     });
}


open(content : any,article:Iarticle) {
  this.oldArticle.name=article.name;
  this.oldArticle.image=article.image;
  this.oldArticle.description=article.description;

  this.modalService.open(content,
 {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
  this.ArticleService.UpdateArticle(article.id, this.oldArticle).subscribe(prd=>{
    this.router.navigate(['/Home']);

  });
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    
    this.closeResult = 
       `Dismissed ${this.getDismissReason(reason)}`;
  });

}
openToDelete(content : any, article:Iarticle) {
  this.modalService.open(content,
 {ariaLabelledBy: 'modal-Delete-title'}).result.then((result)  => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.ArticleService.DeleteArticle(article.id).subscribe(prd=>{
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
