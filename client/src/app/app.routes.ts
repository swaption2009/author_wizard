import { provideRouter, RouterConfig } from '@angular/router';
import { BookListComponent } from './book-list';
import { NewBookComponent } from './new-book';
import { EditBookComponent } from './edit-book';

const routes: RouterConfig = [
  { path: '', component: BookListComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
