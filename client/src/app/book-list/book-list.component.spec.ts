/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import {
  Http,
  Response,
  ResponseOptions,
  BaseRequestOptions,
  ConnectionBackend
} from '@angular/http';

import { BookListComponent } from './book-list.component';
import { BookService } from '../book.service';

describe('Component: BookList', () => {
  let fixture;
  let component;
  let bookService;
  let spy;
  let testList;

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
      declarations: [BookListComponent]
    });

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.debugElement.componentInstance;

    bookService = fixture.debugElement.injector.get(BookService);

    let observable: Observable<Response> = Observable.create(observer => {
      let responseOptions = new ResponseOptions({
        body: '[{ "name": "Whiteboard Interviews" }]'
      });

      observer.next(new Response(responseOptions));
    });

    spy = spyOn(bookService, 'getList')
      .and.returnValue(observable);
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should return a response', () => {
    fixture.detectChanges();
    expect(component.books).toEqual([
      { 'name': 'Whiteboard Interviews' }
    ]);
  });
});
