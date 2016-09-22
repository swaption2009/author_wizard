import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getList() {
    return this.http.get('/api/books.json');
  }

  find(id) {
    return this.http.get('/api/books/' + id + '.json');
  }

  delete(book) {
    return this.http.delete('/api/books/' + book.id + '.json');
  }

  save(book) {
    let body = JSON.stringify({ book: book });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (book.id) {
      return this.http.patch('/api/books/' + book.id + '.json', body, options);
    } else {
      return this.http.post('/api/books.json', body, options);
    }
  }
}
