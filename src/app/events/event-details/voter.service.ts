import { Injectable } from '@angular/core';
import { ISession } from '../shared/event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  constructor(private http: HttpClient) {}

  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter((voter) => voter !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this.http
      .delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': '/application/json' }),
    };
    this.http
      .post(url, voterName, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe(); // self-subscribe because it's not necessary for where we use addVote() in the session-list for anything in there to subscribe to get updated voter info
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some((voter) => voter === voterName); // .some() will return a boolean whether there is or is not at least one element that matches a specific condition
  }

  // Learn more about RxJS and TypeScript to understand more
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
