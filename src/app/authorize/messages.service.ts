import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }

  getMessages(): Observable<string[]> {
    return this.http.get<string[]>('/hello').pipe(catchError((error) => {
      console.log("Fetch")
      // window.location.href = 'http://127.0.0.1:8080/authorize';
      return of([]);
    }));
  }
}
