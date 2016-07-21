/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Book} from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book('How to Win Friends and Influence People')).toBeTruthy();
  });
});
