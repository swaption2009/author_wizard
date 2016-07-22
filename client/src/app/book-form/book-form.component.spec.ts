/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ActivatedRoute, RouterConfig, Router } from '@angular/router';

class MockRouter { createUrlTree() {} }
class MockActivatedRoute { }

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BookFormComponent } from './book-form.component';
import { BookService } from '../book.service';

describe('Component: BookForm', () => {
  beforeEachProviders(() => [
    BookService,
    provide(Router, { useClass: MockRouter }),
    provide(ActivatedRoute, { useClass: MockActivatedRoute }),
    HTTP_PROVIDERS
  ]);

  it('should create an instance', inject([BookService, Router], (bookService, router) => {
    let component = new BookFormComponent(bookService, router);
    expect(component).toBeTruthy();
  }));
});
