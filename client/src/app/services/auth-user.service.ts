import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    return this.http.post<any>("http://localhost:3000/api/user/register",JSON.stringify(data),{
      headers:headers
    })
  }

  login(data):Observable<any>{ 
    console.log(data);
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    return this.http.post<any>("http://localhost:3000/api/user/login",JSON.stringify(data),{
      headers:headers
    })
  }

  logout(){
    localStorage.removeItem('user');
  }

  getUser(){
    return localStorage.getItem('user');
  }
}
