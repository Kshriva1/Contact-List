import { Injectable } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(credentials:any): Observable<any>{

    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    return this.http.post<any>('http://localhost:3000/api/admin/login', JSON.stringify(credentials), {
      headers: headers
    })
  }

  logout(){
    localStorage.removeItem('admin')
  }

  getAdmin(){
    return localStorage.getItem('admin');
  }
}
