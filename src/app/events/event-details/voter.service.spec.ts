import { TestBed } from '@angular/core/testing';

import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { of } from 'rxjs';

fdescribe('VoterService', () => {
  let voterService: VoterService, mockHttp;

  beforeEach(() => {
    // pass jasmine the name of the object and an array of it's methods, now mockHttp will have delete() and post() methods
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove voter from the list of voters', () => {
      // 1. Arrange
      var session = { id: 5, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false)); // tells mockHttp object that whenever the .delete method is called, this is the value that should be returned. In our case we know our deleteVoter code returns an Observable after http.delete(), so we'll create an Observable using of() RxJS method

      // 2. Act
      voterService.deleteVoter(3, <ISession>session, 'joe'); // forcefully cast 'session' to ISession to avoid TS error even though our local 'session' doesn't have all the properties an ISession should have

      // 3. Assert
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right URL', () => {
      var session = { id: 6, voters: ['joe', 'john'] };
      mockHttp.delete.and.returnValue(of(false)); // tells mockHttp object that whenever the .delete method is called, this is the value that should be returned. In our case we know our deleteVoter code returns an Observable after http.delete(), so we'll create an Observable using of() RxJS method

      voterService.deleteVoter(3, <ISession>session, 'joe'); // forcefully cast 'session' to ISession to avoid TS error even though our local 'session' doesn't have all the properties an ISession should have

      expect(mockHttp.delete).toHaveBeenCalledWith(
        '/api/events/3/sessions/6/voters/joe'
      );
    });
  });

  describe('addVoter', () => {
    // Check that .http.post() is called correctly
    it('should call http.post with the right URL', () => {
      var session = { id: 6, voters: ['john'] };
      mockHttp.post.and.returnValue(of(false)); // tells mockHttp object that whenever the .delete method is called, this is the value that should be returned. In our case we know our deleteVoter code returns an Observable after http.delete(), so we'll create an Observable using of() RxJS method

      voterService.addVoter(3, <ISession>session, 'joe'); // forcefully cast 'session' to ISession to avoid TS error even though our local 'session' doesn't have all the properties an ISession should have

      // Instead of checking that the exact 'options' argument for HttpHeaders was created, can just assume at least something was passed in some kind of object using Jasmine, since the options code isn't complex
      expect(mockHttp.post).toHaveBeenCalledWith(
        '/api/events/3/sessions/6/voters/joe',
        'joe',
        jasmine.any(Object)
      );
    });
  });
});
