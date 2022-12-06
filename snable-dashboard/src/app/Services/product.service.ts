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
addProduct(NewProduct:IProduct, image:any):Observable<IProduct>
{
  var formData: any = new FormData();
  formData.append("name", NewProduct.name);
  formData.append("price", NewProduct.price);
  formData.append("quantity", NewProduct.quantity);
  formData.append('image', image[0]);
  formData.append("description", NewProduct.description);
  formData.append("SupCategory_Id", NewProduct.SupCategory_Id);

  return this.HttpClient.post<any>(`${environment.APIBaseURL}/Product/AddProduct`,
  formData);
}
UpdateProduct(id:number, UpdateProduct:IProduct):Observable<IProduct>
{
  return this.HttpClient.put<IProduct>(`${environment.APIBaseURL}/Product/UpdateProduct/${id}`, JSON.stringify(UpdateProduct),
  this.httpOptions);
}
DeleteProduct(id:Number):Observable<IProduct>
{
return this.HttpClient.delete<IProduct>(`${environment.APIBaseURL}/Product/DeleteProductByID/${id}`);
}
}
