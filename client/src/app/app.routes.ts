import { provideRouter, RouterConfig } from '@angular/router';
import { BookListComponent } from './book-list';
import { NewBookComponent } from './new-book';

const routes: RouterConfig = [
  { path: '', component: BookListComponent },
  { path: 'new-book', component: NewBookComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
