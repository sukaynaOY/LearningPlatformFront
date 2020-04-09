import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/training/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  getAlltraining(): Observable<any> {
    return this.http.get(baseUrl + 'alltrainings');
  }

  create(data) {
    console.log(data);
    return this.http.post(baseUrl+'gestiontraining', data);
  }
  get(id) {
    return this.http.get(`${baseUrl}alltrainings/${id}`);
  }
  countTraining(){
    return this.http.get(baseUrl + 'countTrainings');
  }
  countPrice(){
    return this.http.get(baseUrl + 'countPrice');
  }

}
