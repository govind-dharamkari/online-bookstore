import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../common/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<GetresponseBooks>(this.baseUrl).pipe(
      map(response => response._embedded.books)
    );
    
  }
}

interface GetresponseBooks{
  _embedded:{
    books: Book[];
  }
}