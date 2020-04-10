import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/beneficiary/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http: HttpClient) { }


  getById(id) {
    return this.http.get(`${baseUrl}getbeneficiary/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl+'addElement', data);
  }

  myTrainings(id):Observable<any>{
    return this.http.get(`${baseUrl}mesFormation/${id}`);
  }

  getelements(id) {
    return this.http.get(`${baseUrl}getbeneficiaryelememnts/${id}`);
  }
  delete(id,benId){
    return this.http.post(`${baseUrl}suppElement/${benId}`, id);
  }

}
