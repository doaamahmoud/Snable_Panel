import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iemployee } from '../ViewModels/iemployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    private httpOptions
  constructor( private HttpClient:HttpClient ) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })    
  }
}
  getEmployees():Observable<Iemployee[]>{
    return this.HttpClient.get<Iemployee[]>(`${environment.APIBaseURL}/Employee/GetAllEmployees`);
   }
  
  getEmployeeByID(ID:number):Observable<Iemployee>{
      return this.HttpClient.get<Iemployee>(`${environment.APIBaseURL}/Employee/GetEmployeeByID/${ID}`)
   }
  addEmployee(NewCategory:Iemployee):Observable<Iemployee>
  {
    return this.HttpClient.post<Iemployee>(`${environment.APIBaseURL}/Employee/AddEmployee`, JSON.stringify(NewCategory),this.httpOptions);
  }
  UpdateEmployee(id:number, updateCategory:Iemployee):Observable<Iemployee>
  {
    return this.HttpClient.patch<Iemployee>(`${environment.APIBaseURL}/Employee/UpdateEmployeeByID/${id}`, JSON.stringify(updateCategory),this.httpOptions);
  }
  DeleteEmployee(id:Number):Observable<Iemployee>
{
  return this.HttpClient.delete<Iemployee>(`${environment.APIBaseURL}/Employee/DeleteEmployeeByID/${id}`);
}
}
