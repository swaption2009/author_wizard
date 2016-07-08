import { Component } from '@angular/core';
import { BookListComponent } from './book-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BookListComponent]
})
export class AppComponent {
  title = 'app works!';
}
