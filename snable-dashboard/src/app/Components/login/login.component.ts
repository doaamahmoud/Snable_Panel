import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Username:string="";
  password:string=""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OpenDashboard(){
    if(this.Username=="admin" && this.password=="123456")
      this.router.navigate(['/Home']);
  }
}
