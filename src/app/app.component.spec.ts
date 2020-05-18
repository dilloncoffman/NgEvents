import { TestBed, async } from '@angular/core/testing';
import { EventsAppComponent } from './events-app.component';

describe('EventsAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAppComponent],
    }).compileComponents();
  }));

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
