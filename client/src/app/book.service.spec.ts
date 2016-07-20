/* tslint:disable:no-unused-variable */

import { provide } from '@angular/core';
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

import { BookService } from './book.service';

describe('Book Service', () => {
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

  it('should ...',
      inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it('should assign a list of books', inject([BookService, MockBackend, Http], (bookService, backend, http) => {
    backend.connections.subscribe(connection => {
      var mockResponse = new Response(new ResponseOptions({
        body: [{ name: 'Whiteboard Interviews' }]
      }));
      connection.mockRespond(mockResponse);
    });

    let service = new BookService(http);
    service.getList().subscribe(response => {
      expect(response.json()).toEqual([{ name: 'Whiteboard Interviews' }]);
    });
  }));
});
