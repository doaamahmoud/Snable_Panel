import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISupcategory } from '../ViewModels/i-supcategory';

@Injectable({
  providedIn: 'root'
})
export class SupcategoryService {
  private httpOptions
  constructor( private HttpClient:HttpClient ) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })    
  }
}

  getAllCateogories():Observable<ISupcategory[]>{
    return this.HttpClient.get<ISupcategory[]>(`${environment.APIBaseURL}/Category/GetAllCategories`);
   }
  
  getCategoryByID(ID:number):Observable<ISupcategory>{
      return this.HttpClient.get<ISupcategory>(`${environment.APIBaseURL}/Category/GetCategoryById/${ID}`)
   }
  addCategory(NewCategory:ISupcategory):Observable<ISupcategory>
  {
    return this.HttpClient.post<ISupcategory>(`${environment.APIBaseURL}/Category/AddCategory`, JSON.stringify(NewCategory),this.httpOptions);
  }
  UpdateCategory(id:number, updateCategory:ISupcategory):Observable<ISupcategory>
  {
    return this.HttpClient.patch<ISupcategory>(`${environment.APIBaseURL}/Category/UpdateCategory/${id}`, JSON.stringify(updateCategory),this.httpOptions);
  }
  DeleteCategory(id:Number):Observable<ISupcategory>
{
  return this.HttpClient.delete<ISupcategory>(`${environment.APIBaseURL}/Category/DeleteCategoryByID/${id}`);
}
}
