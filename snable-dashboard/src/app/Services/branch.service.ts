import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ibranch } from '../ViewModels/ibranch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private httpOptions
  constructor( private HttpClient:HttpClient ) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })    
  }
}
  getAllBranches():Observable<Ibranch[]>{
    return this.HttpClient.get<Ibranch[]>(`${environment.APIBaseURL}/Branch/GetAllBranches`);
   }
  
  getBranchByID(ID:number):Observable<Ibranch>{
      return this.HttpClient.get<Ibranch>(`${environment.APIBaseURL}/Branch/GetBranchByID/${ID}`)
   }
  addBranch(NewCategory:Ibranch):Observable<Ibranch>
  {
    return this.HttpClient.post<Ibranch>(`${environment.APIBaseURL}/Branch/AddBranch`, JSON.stringify(NewCategory),this.httpOptions);
  }
  UpdateBranch(id:number, updateCategory:Ibranch):Observable<Ibranch>
  {
    return this.HttpClient.patch<Ibranch>(`${environment.APIBaseURL}/Branch/UpdateBranch/${id}`, JSON.stringify(updateCategory),this.httpOptions);
  }
  DeleteBranch(id:Number):Observable<Ibranch>
{
  return this.HttpClient.delete<Ibranch>(`${environment.APIBaseURL}/Branch/DeleteBranchByID/${id}`);
}
}
