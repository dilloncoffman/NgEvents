import { Injectable } from '@angular/core';
import { ISession } from '../shared/event';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  constructor() {}

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter((voter) => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some((voter) => voter === voterName); // .some() will return a boolean whether there is or is not at least one element that matches a specific condition
  }
}
