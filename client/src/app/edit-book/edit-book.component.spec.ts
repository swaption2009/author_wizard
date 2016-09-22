/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { ActivatedRoute } from '@angular/router';

import {
  Http,
  Response,
  ResponseOptions,
  BaseRequestOptions,
  ConnectionBackend
} from '@angular/http';

import { BookService } from '../book.service';
import { EditBookComponent } from './edit-book.component';
import { MockBookFormComponent } from '../book-form/mock-book-form.component';
import { ActivatedRouteStub } from '../testing/router-stubs';

describe('Component: EditBook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        BookService,
        { provide: ActivatedRoute, useValue: ActivatedRouteStub }
      ],
      declarations: [
        EditBookComponent,
        MockBookFormComponent,
      ]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(EditBookComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
