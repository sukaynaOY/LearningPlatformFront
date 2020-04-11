import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/trainer/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  save(file: File) {
    const data: FormData = new FormData();
    data.append('file', file);

    return this.http.post(baseUrl+'savefile', data, {
      reportProgress: true,
      responseType: 'text'
      });
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/api/trainer/savefile', data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.http.request(newRequest);
    }

    getfile(name){
      return this.http.get(`${baseUrl}getfile/${name}`);
    }
    getTrainer(id) {
      return this.http.get(`${baseUrl}getone/${id}`);
    }
  
    updateTrainer(data){
      return this.http.post(baseUrl+'update', data);
  
    }

}
