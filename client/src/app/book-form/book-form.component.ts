import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() bookId = '';

  model = new Book('');

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    console.log(this.bookId);
  }

  onSubmit() {
    this.bookService
      .save(this.model)
      .subscribe(response => this.router.navigate(['']));
  }

}
