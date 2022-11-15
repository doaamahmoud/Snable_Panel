import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpOptions
  constructor( private HttpClient:HttpClient ) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })    
  }
}
  getAllCateogories():Observable<Icategory[]>{
    return this.HttpClient.get<Icategory[]>(`${environment.APIBaseURL}/Category/GetAllCategories`);
   }
  
  getCategoryByID(ID:number):Observable<Icategory>{
      return this.HttpClient.get<Icategory>(`${environment.APIBaseURL}/Category/GetCategoryById/${ID}`)
   }
  addCategory(NewCategory:Icategory):Observable<Icategory>
  {
    return this.HttpClient.post<Icategory>(`${environment.APIBaseURL}/Category/AddCategory`, JSON.stringify(NewCategory),this.httpOptions);
  }
  UpdateCategory(id:number, updateCategory:Icategory):Observable<Icategory>
  {
    return this.HttpClient.patch<Icategory>(`${environment.APIBaseURL}/Category/UpdateCategory/${id}`, JSON.stringify(updateCategory),this.httpOptions);
  }
  DeleteCategory(id:Number):Observable<Icategory>
{
  return this.HttpClient.delete<Icategory>(`${environment.APIBaseURL}/Category/DeleteCategoryByID/${id}`);
}
}
