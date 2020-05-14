import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = []; // Using to show filtered sessions as a subset of sessions var itself

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    if (this.sessions) {
      // Filter sessions
      this.filterSessions(this.filterBy);
      // Also sort sessions
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      // Show all sessions
      this.visibleSessions = this.sessions.slice(0); // create completely duplicate array instead of just setting the references to the same 'sessions' object spot in memory
    } else {
      // Filter sessions to just sessions with matching level
      this.visibleSessions = this.sessions.filter((session) => {
        // .filter() will also create a complete duplicate
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

// Sorting functions, stateless so don't need to be actual methods of the class
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1; // s2.name is before s1.name
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length; // positive number, 0, or negative number determines sort
}
