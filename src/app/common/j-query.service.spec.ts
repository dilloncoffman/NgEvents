import { TestBed } from '@angular/core/testing';

import { JQUERY_TOKEN } from './j-query.service';

describe('JQueryService', () => {
  let jQuery: any = window['jQuery']; // let TypeScript know not to worry about Toastr since we know it's something declared in our global scope

  TestBed.configureTestingModule({
    providers: [{ provide: JQUERY_TOKEN, useValue: jQuery }],
  }).compileComponents();

  it('should be created', () => {
    expect(jQuery).toBeTruthy();
  });
});
