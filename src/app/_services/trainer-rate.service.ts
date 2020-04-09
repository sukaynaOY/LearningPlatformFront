import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl ='http://localhost:8080/api/trainerRate/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainerRateService {

  constructor(private http: HttpClient) {
  }
  getTrainerRate(id): Observable<any>{
    return this.http.get(baseUrl+id);
  }

  create(data){
    return this.http.post(baseUrl+'ratingTrainer',data);
  }
}
