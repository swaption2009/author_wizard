/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';

import {
  Http,
  Response,
  ResponseOptions,
  BaseRequestOptions,
  ConnectionBackend
} from '@angular/http';

import { BookFormComponent } from './book-form.component';
import { BookService } from '../book.service';

describe('Component: BookForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        BookService
      ],
      declarations: [BookFormComponent],
      imports: [FormsModule]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(BookFormComponent);
    let component = fixture.debugElement.componentInstance;
    let bookService = fixture.debugElement.injector.get(BookService);
    expect(component).toBeTruthy();
  });
});
