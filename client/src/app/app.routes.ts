import { provideRouter, RouterConfig } from '@angular/router';
import { BookListComponent } from './book-list';

const routes: RouterConfig = [
  { path: '', component: BookListComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
