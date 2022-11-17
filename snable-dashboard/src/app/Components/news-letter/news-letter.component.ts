import { Component, OnInit } from '@angular/core';
import { NewletterService } from 'src/app/Services/newletter.service';
import { Inewletter } from 'src/app/ViewModels/inewletter';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Carousel, Modal } from 'bootstrap';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {

  closeResult = '';
  NewLetterList:Inewletter[] | undefined;
  testmodel:Modal| undefined
 
  constructor(private NewLetterService:NewletterService, private modalService: NgbModal, private router:Router) { 
    this.NewLetterList=[];
  }

  ngOnInit(): void {
    this.NewLetterService.getAllNewsLetters().subscribe(data=>{
      this.NewLetterList=data;
  });
  }

}
