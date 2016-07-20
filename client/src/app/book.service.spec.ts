/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BookService } from './book.service';

describe('Book Service', () => {
  beforeEachProviders(() => [BookService]);

  it('should ...',
      inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
