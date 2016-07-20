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
});
