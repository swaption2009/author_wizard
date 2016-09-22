import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  model = new Book('Some book');

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.bookService
      .save(this.model)
      .subscribe(response => console.log(response));
  }

}
