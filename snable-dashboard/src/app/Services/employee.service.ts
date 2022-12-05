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

  private httpOptionsForm ={
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data;',
      'enctype': 'multipart/form-data'

    })}


  getEmployees():Observable<Iemployee[]>{
    return this.HttpClient.get<Iemployee[]>(`${environment.APIBaseURL}/Employee/GetAllEmployees`);
   }

  getEmployeeByID(ID:number):Observable<Iemployee>{
      return this.HttpClient.get<Iemployee>(`${environment.APIBaseURL}/Employee/GetEmployeeByID/${ID}`)
   }


  addEmployee(NewEmployee:Iemployee, image:any):Observable<Iemployee>
  {
    var formData: any = new FormData();
    formData.append("name", NewEmployee.name);
    formData.append("position", NewEmployee.position);
    formData.append('image', image[0]);
    return this.HttpClient.post<any>(`${environment.APIBaseURL}/Employee/AddEmployee`,
    formData);
  }

  UpdateEmployee(id:number, UpdateEmployee:Iemployee):Observable<Iemployee>
  {
    return this.HttpClient.put<Iemployee>(`${environment.APIBaseURL}/Employee/UpdateEmployeeByID/${id}`,
    JSON.stringify(UpdateEmployee),this.httpOptions);
  }
  DeleteEmployee(id:Number):Observable<Iemployee>
{
  return this.HttpClient.delete<Iemployee>(`${environment.APIBaseURL}/Employee/DeleteEmployeeByID/${id}`);
}
}
