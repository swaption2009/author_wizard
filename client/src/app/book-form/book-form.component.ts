import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  model = new Book('Some book');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submitted');
  }

}
