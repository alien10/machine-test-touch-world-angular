import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiListService {
  private apiUrl = 'https://testapp.touchworldtechnology.com/interview/test/v1/product/users?count=20000';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
