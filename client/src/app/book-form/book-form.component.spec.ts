/* tslint:disable:no-unused-variable */

import { By }             from '@angular/platform-browser';
import { DebugElement }   from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

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
    HTTP_PROVIDERS
  ]);

  it('should create an instance', inject([BookService], (bookService) => {
    let component = new BookFormComponent(bookService);
    expect(component).toBeTruthy();
  }));
});
