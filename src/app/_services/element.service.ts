import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/element/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http: HttpClient) { }


  getelementbyname(name){
    return this.http.get(`${baseUrl}allelement/${name}`);
  }

  getalltraining() : any {
    return this.http.get(`${baseUrl}allelement`);
  }



}
