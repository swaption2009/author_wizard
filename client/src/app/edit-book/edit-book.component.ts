import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { BookFormComponent } from '../book-form';

@Component({
  moduleId: module.id,
  selector: 'app-edit-book',
  templateUrl: 'edit-book.component.html',
  styleUrls: ['edit-book.component.css'],
  providers: [BookService],
  directives: [BookFormComponent]
})
export class EditBookComponent implements OnInit {
  bookId: number;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() {
    this.route
      .params
      .subscribe(params => this.bookId = +params['id']);
  }

}
