import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpOptions
  constructor( private HttpClient:HttpClient ) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })    
  }
}
getAllProducts():Observable<IProduct[]>{
  return this.HttpClient.get<IProduct[]>(`${environment.APIBaseURL}/Product/GetAllProducts`);
 }

getProductByID(ID:number):Observable<IProduct>{
    return this.HttpClient.get<IProduct>(`${environment.APIBaseURL}/Product/GetProductByID/${ID}`)
 }
 getProductsBySupCategoryID(SupcatID:number):Observable<IProduct[]>{
  return this.HttpClient.get<IProduct[]>(`${environment.APIBaseURL}/Product/GetProductBySupCategorID=${SupcatID}`)
}
addProduct(NewCategory:IProduct):Observable<IProduct>
{
  return this.HttpClient.post<IProduct>(`${environment.APIBaseURL}/Product/AddProduct`, JSON.stringify(NewCategory),this.httpOptions);
}
UpdateProduct(id:number, updateCategory:IProduct):Observable<IProduct>
{
  return this.HttpClient.patch<IProduct>(`${environment.APIBaseURL}/Product/UpdateProduct/${id}`, JSON.stringify(updateCategory),this.httpOptions);
}
DeleteProduct(id:Number):Observable<IProduct>
{
return this.HttpClient.delete<IProduct>(`${environment.APIBaseURL}/Product/DeleteCategoryByID/${id}`);
}
}
