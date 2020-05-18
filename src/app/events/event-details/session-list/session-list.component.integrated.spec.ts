import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SessionListComponent } from './session-list.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from '../voter.service';
import { UpvoteComponent } from '../upvote/upvote.component';
import { DurationPipe } from '../../shared';
import { CollapsibleWellComponent } from 'src/app/common';
import { By } from '@angular/platform-browser';

fdescribe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  // this beforeEach needs to complete before we create the instance of the component
  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { username: 'Dillon' },
    };
    let mockVoterService = {
      userHasVoted: () => true,
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        // UpvoteComponent,
        // CollapsibleWellComponent,
        DurationPipe,
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      // 1. Arrange
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob'],
        },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      // 2. Act - change state of component
      component.ngOnChanges(); // if sorting/filtering was happening on ngOnInit, you wouldn't have to call this but because ngOnChanges is only called when a parent component updates the @Input properties of the child component so we have to invoke it ourselves here since we set the values above in 1. Arrange
      fixture.detectChanges(); // this runs through the change detection cycle taking every value the component has and the values that were set when ngOnChanges was called and then rerenders all those changes out to HTML

      // 3. Assert - set expectations on result
      expect(element.querySelector('[well-title]').textContent).toContain(
        'Session 1'
      );
      // Using DebugElement to test the same thing to show how we can use certain methods avaiable to the DebugElement wrapper in order to test our template
      expect(
        debugEl.query(By.css('[well-title]')).nativeElement.textContent
      ).toContain('Session 1');
    });
  });
});
