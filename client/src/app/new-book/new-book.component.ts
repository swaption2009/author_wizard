import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
  providers: [BookService]
})
export class NewBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
