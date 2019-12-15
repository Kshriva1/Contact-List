import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(data:any):Observable<any>{

    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    return this.http.post<any>("http://localhost:3000/api/user/create",JSON.stringify(data),{
      headers:headers
    })
    
  }

  view(data:any):Observable<any>{
    
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    return this.http.post<any>("http://localhost:3000/api/user/view",JSON.stringify(data),{
      headers:headers
    })
  }

  update(id,data:any):Observable<any>{
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    return this.http.put<any>("http://localhost:3000/api/user/update/" + id,JSON.stringify(data),{
      headers:headers
    })
  }

  delete(id):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/api/user/delete/" + id)
  }
}
