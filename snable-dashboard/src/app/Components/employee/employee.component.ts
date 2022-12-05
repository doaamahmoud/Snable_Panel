import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Carousel, Modal } from 'bootstrap';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Iemployee } from 'src/app/ViewModels/iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public base64Image!: string | '';
  closeResult = '';
  EmployeeList:Iemployee[] | undefined;
  testmodel:Modal| undefined
  oldEmployee: Iemployee={} as Iemployee;
  NewEmployee:Iemployee={} as Iemployee;
  image: any;

  constructor(private EmployeeService:EmployeeService, private modalService: NgbModal, private router:Router,  private San:DomSanitizer) {
    this.EmployeeList=[];
  }



  ngOnInit(): void {
    this.EmployeeService.getEmployees().subscribe(data=>{
      this.EmployeeList=data;
    this.EmployeeList.forEach(element => {
      element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
    });
  })
<<<<<<< HEAD
  }
  
=======
}


onFileChange(event:any){
  this.image = event.target.files;
  console.log(event);
}


>>>>>>> a94665c82f1ae820d010f46b87d692fda0b2bed4
  AddNewEmployee(content:any){
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-Add-title'}).result.then((r)  => {


        this.EmployeeService.addEmployee(this.NewEmployee,this.image).subscribe(prd=>{
          this.router.navigate(['/Home']);
        });

         this.closeResult = `Closed with: ${r}`;
       }, (reason) => {
         this.closeResult =
            `Dismissed ${this.getDismissReason(reason)}`;
       });
  }


  open(content : any,employee:Iemployee) {
    this.oldEmployee.name=employee.name;
    this.oldEmployee.image=employee.image;
    this.oldEmployee.position=employee.position;

    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
    this.EmployeeService.UpdateEmployee(employee.id, this.oldEmployee).subscribe(prd=>{
      this.router.navigate(['/Home']);

    });
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

      this.closeResult =
         `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  openToDelete(content : any, employee:Iemployee) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-Delete-title'}).result.then((result)  => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.EmployeeService.DeleteEmployee(employee.id).subscribe(prd=>{
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
