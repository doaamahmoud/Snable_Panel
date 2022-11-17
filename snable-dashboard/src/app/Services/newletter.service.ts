import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inewletter } from '../ViewModels/inewletter';

@Injectable({
  providedIn: 'root'
})
export class NewletterService {

  private httpOptions
  constructor( private HttpClient:HttpClient ) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })    
  }
}
  getAllNewsLetters():Observable<Inewletter[]>{
    return this.HttpClient.get<Inewletter[]>(`${environment.APIBaseURL}/NewsLetter/GetAllNewsLetters`);
   }
  
  getNewsLetterByID(ID:number):Observable<Inewletter>{
      return this.HttpClient.get<Inewletter>(`${environment.APIBaseURL}/NewsLetter/GetNewsLetterById/${ID}`)
   }
  addNewsLetter(NewCategory:Inewletter):Observable<Inewletter>
  {
    return this.HttpClient.post<Inewletter>(`${environment.APIBaseURL}/NewsLetter/AddNewsLetter`, JSON.stringify(NewCategory),this.httpOptions);
  }
  UpdateNewsLetter(id:number, updateCategory:Inewletter):Observable<Inewletter>
  {
    return this.HttpClient.put<Inewletter>(`${environment.APIBaseURL}/NewsLetter/UpdateNewsLetter/${id}`, JSON.stringify(updateCategory),this.httpOptions);
  }
  DeleteNewsLetter(id:Number):Observable<Inewletter>
{
  return this.HttpClient.delete<Inewletter>(`${environment.APIBaseURL}/NewsLetter/"DeleteNewsLetterByID/${id}`);
}
}
