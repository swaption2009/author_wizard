/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { MockBackend } from '@angular/http/testing';

import {
  Http,
  HTTP_PROVIDERS,
  Response,
  ResponseOptions,
  BaseRequestOptions,
  ConnectionBackend
} from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { BookService } from '../book.service';

describe('Component: BookList', () => {
  beforeEachProviders(() => [
    BookService,
    HTTP_PROVIDERS,
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
      useFactory: function (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  it('should create an instance', inject([BookService], (bookService) => {
    let component = new BookListComponent(bookService);
    expect(component).toBeTruthy();
  }));

  it('should assign a list of books', inject([BookService, MockBackend], (bookService, backend) => {
    var response = new Response(new ResponseOptions({
      body: [{ name: 'Whiteboard Interviews' }]
    }));

    backend.connections.subscribe(connection => {
      connection.mockRespond(response);
    });

    let component = new BookListComponent(bookService);
    component.ngOnInit();
    expect(component.books).toEqual([{ name: 'Whiteboard Interviews' }]);
  }));
});
