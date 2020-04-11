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
  getAllMytraining(id): Observable<any> {
    return this.http.get(`${baseUrl}allMyTrainings/${id}`);
  }
  countPrice(){
    return this.http.get(baseUrl + 'countPrice');
  }
  delete(id) {
    return this.http.delete(`${baseUrl}alltrain/${id}`);
  }
  countavg(id):Observable<any> {
    return this.http.get(`${baseUrl}countbens/${id}`);
  }
  declancher(id: any):Observable<any> {
    return this.http.get(`${baseUrl}declancher/${id}`);
  }
  getTrainer(trainingid){

    return this.http.get(`${baseUrl}getTrainer/${trainingid}`, {responseType: 'text'})
  }

}
