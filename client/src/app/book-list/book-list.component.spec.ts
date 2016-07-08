/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('Component: BookList', () => {
  beforeEachProviders(() => [
    HTTP_PROVIDERS
  ]);

  it('should create an instance', inject([Http], (http) => {
    let component = new BookListComponent(http);
    expect(component).toBeTruthy();
  }));
});
