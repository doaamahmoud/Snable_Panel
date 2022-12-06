import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iarticle } from '../ViewModels/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private httpOptions
  constructor( private HttpClient:HttpClient ) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  }
}
getAllArticles():Observable<Iarticle[]>{
  return this.HttpClient.get<Iarticle[]>(`${environment.APIBaseURL}/Article/GetAllArticles`);
 }

getArticleByID(ID:number):Observable<Iarticle>{
    return this.HttpClient.get<Iarticle>(`${environment.APIBaseURL}/Article/GetArticleByID/${ID}`)
 }
addArticle(NewCategory:Iarticle, image:any):Observable<Iarticle>
{
  var formData: any = new FormData();
  formData.append("name", NewCategory.name);
  formData.append('image', image[0]);
  formData.append('description', NewCategory.description);

  return this.HttpClient.post<any>(`${environment.APIBaseURL}/Article/AddArticle`,
  formData);
}

UpdateArticle(id:number, updateCategory:Iarticle):Observable<Iarticle>
{
  return this.HttpClient.put<Iarticle>(`${environment.APIBaseURL}/Article/UpdateArticle/${id}`, JSON.stringify(updateCategory),this.httpOptions);
}
DeleteArticle(id:Number):Observable<Iarticle>
{
return this.HttpClient.delete<Iarticle>(`${environment.APIBaseURL}/Article/DeleteArticle/${id}`);
}
}
