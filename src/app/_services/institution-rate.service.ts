import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl ='http://localhost:8080/api/InstitutionRate/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class InstitutionRateService {
  

  constructor(private http: HttpClient) { }

  getInstitutionRate(name): Observable<any>{
    return this.http.get(baseUrl+name);
  }

  create(data){
    return this.http.post(baseUrl+'ratingInstitution',data);
  }
  countrate(): Observable<any>{
    return this.http.get(baseUrl+'countrate');
  }
  count()
  {
    return this.http.get(baseUrl+'count');
  }
}
