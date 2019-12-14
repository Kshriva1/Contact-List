import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

    create(data:any):Observable<any>{

     const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    return this.http.post<any>('http://localhost:3000/api/admin/create', JSON.stringify(data), {
      headers: headers
    })
    }

    view():Observable<any[]>{
      return this.http.get<any[]>('http://localhost:3000/api/admin/view')
    }

    update(id,data:any):Observable<any>{
      const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    return this.http.put<any>('http://localhost:3000/api/admin/update/' + id, JSON.stringify(data), {
      headers: headers
    })
  }

  delete(id):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/api/admin/delete/' + id)
  }
}
