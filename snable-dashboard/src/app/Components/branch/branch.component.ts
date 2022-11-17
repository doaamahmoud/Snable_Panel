import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Carousel, Modal } from 'bootstrap';
import { BranchService } from 'src/app/Services/branch.service';
import { Ibranch } from 'src/app/ViewModels/ibranch';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  closeResult = '';
  BranchList:Ibranch[] | undefined;
  testmodel:Modal| undefined
  oldBranch: Ibranch={} as Ibranch;
  NewBranch:Ibranch={} as Ibranch;

  constructor(private BranchService:BranchService, private modalService: NgbModal, private router:Router) { 
    this.BranchList=[];
  }

  ngOnInit(): void {
    this.BranchService.getAllBranches().subscribe(data=>{
      this.BranchList=data;

    });
  }
  AddNewBranch(content:any){
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-Add-title'}).result.then((result)  => {
        this.BranchService.addBranch(this.NewBranch).subscribe(prd=>{
        
          this.router.navigate(['/Home']);
        });
        
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = 
            `Dismissed ${this.getDismissReason(reason)}`;
       });
  }


  open(content : any,branch:Ibranch) {
    this.oldBranch.name=branch.name;
    this.oldBranch.address=branch.address;
    this.oldBranch.email=branch.email;
    this.oldBranch.phone1=branch.phone1;
    this.oldBranch.phone2=branch.phone2;

    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
    this.BranchService.UpdateBranch(branch.id, this.oldBranch).subscribe(prd=>{
      this.router.navigate(['/Home']);

    });
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  
  }
  openToDelete(content : any, branch:Ibranch) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-Delete-title'}).result.then((result)  => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.BranchService.DeleteBranch(branch.id).subscribe(prd=>{
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
