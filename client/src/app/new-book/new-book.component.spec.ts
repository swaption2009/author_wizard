/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NewBookComponent } from './new-book.component';

describe('Component: NewBook', () => {
  it('should create an instance', () => {
    let component = new NewBookComponent();
    expect(component).toBeTruthy();
  });
});
