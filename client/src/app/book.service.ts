import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookService {

  constructor(private http: Http) {}

  getList() {
    return this.http.get('/api/books.json');
  }
}
