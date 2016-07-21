import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookService {

  constructor(private http: Http) {}

  getList() {
    return this.http.get('/api/books.json');
  }

  save(book) {
    let body = JSON.stringify({ book: book });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/books.json', body, options);
  }
}
