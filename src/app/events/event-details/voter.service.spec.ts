import { TestBed } from '@angular/core/testing';

import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService, mockHttp;

  beforeEach(() => {
    // pass jasmine the name of the object and an array of it's methods, now mockHttp will have delete() and post() methods
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);

    // TestBed.configureTestingModule({});
    // service = TestBed.inject(VoterService);
  });

  describe('deleteVoter', () => {
    it('should remove voter from the list of voters', () => {
      var session = { id: 5, voters: ['joe', 'john'] };

      mockHttp.delete.and.returnValue(of(false)); // tells mockHttp object that whenever the .delete method is called, this is the value that should be returned. In our case we know our deleteVoter code returns an Observable after http.delete(), so we'll create an Observable using of() RxJS method

      voterService.deleteVoter(3, <ISession>session, 'joe'); // forcefully cast 'session' to ISession to avoid TS error even though our local 'session' doesn't have all the properties an ISession should have

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });
  });
});
