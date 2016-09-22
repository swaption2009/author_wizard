import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [BookService]
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
