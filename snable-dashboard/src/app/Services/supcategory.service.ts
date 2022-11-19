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

  getAllSupCateogories():Observable<ISupcategory[]>{
    return this.HttpClient.get<ISupcategory[]>(`${environment.APIBaseURL}/SupCategory/GetAllSupCategories`);
   }
  
  getSupCategoryByID(ID:number):Observable<ISupcategory>{
      return this.HttpClient.get<ISupcategory>(`${environment.APIBaseURL}/SupCategory/GetSupCategoryById/${ID}`)
   }
   getSupCategoryByCategoryID(catID:number):Observable<ISupcategory[]>{
    return this.HttpClient.get<ISupcategory[]>(`${environment.APIBaseURL}/SupCategory/GetSupCategoriesByCategorID?CatID=${catID}`)
  }
  addSupCategory(NewCategory:ISupcategory):Observable<ISupcategory>
  {
    return this.HttpClient.post<ISupcategory>(`${environment.APIBaseURL}/SupCategory/AddSupCategory`, JSON.stringify(NewCategory),this.httpOptions);
  }
  UpdateSupCategory(id:number, updateCategory:ISupcategory):Observable<ISupcategory>
  {
    return this.HttpClient.put<ISupcategory>(`${environment.APIBaseURL}/SupCategory/UpdateSupCategory/${id}`, JSON.stringify(updateCategory),this.httpOptions);
  }
  DeleteSupCategory(id:Number):Observable<ISupcategory>
{
  return this.HttpClient.delete<ISupcategory>(`${environment.APIBaseURL}/SupCategory/DeleteSupCategoryByID/${id}`);
}
}
