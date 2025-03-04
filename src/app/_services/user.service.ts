import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUser(id) {
    return this.http.get(`${baseUrl}getone/${id}`);
  }

  updateUser(data){
    return this.http.post(baseUrl+'update', data);

  }
}
