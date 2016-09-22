import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private bookService: BookService) { }

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
