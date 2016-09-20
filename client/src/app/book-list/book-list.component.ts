import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/books.json')
      .subscribe(response => this.books = response.json());
  }

}
