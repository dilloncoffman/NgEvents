import { TestBed } from '@angular/core/testing';
import { TOASTR_TOKEN, Toastr } from './toastr.service';

describe('ToastrService', () => {
  beforeEach(() => {
    let toastr: Toastr = window['toastr']; // let TypeScript know not to worry about Toastr since we know it's something declared in our global scope

    TestBed.configureTestingModule({
      providers: [{ provide: TOASTR_TOKEN, useValue: toastr }],
    }).compileComponents();
  });

  it('should be created', () => {
    let toastr: Toastr = window['toastr']; // let TypeScript know not to worry about Toastr since we know it's something declared in our global scope

    expect(toastr).toBeTruthy();
  });
});
