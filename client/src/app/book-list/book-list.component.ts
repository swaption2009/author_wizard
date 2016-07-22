import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  moduleId: module.id,
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  providers: [BookService],
  directives: [ROUTER_DIRECTIVES]
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private bookService: BookService) {}

  loadBooks() {
    this.bookService.getList()
      .subscribe(response => this.books = response.json());
  }

  ngOnInit() {
    this.loadBooks();
  }

  delete(book) {
    this.bookService.delete(book)
      .subscribe(response => this.loadBooks());
  }

}
