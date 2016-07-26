/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

class MockActivatedRoute { }

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EditBookComponent } from './edit-book.component';
import { BookService } from '../book.service';

describe('Component: EditBook', () => {
  beforeEachProviders(() => [
    BookService,
    provide(ActivatedRoute, { useClass: MockActivatedRoute }),
    HTTP_PROVIDERS
  ]);

  it('should create an instance', inject([ActivatedRoute, BookService], (route, bookService) => {
    let component = new EditBookComponent(route, bookService);
    expect(component).toBeTruthy();
  }));
});
