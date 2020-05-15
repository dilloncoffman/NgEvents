import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventService: EventService) {}

  /*
   *TIP: A resolver automatically subscribes to an Observable call that it gets
    Angular has built-in functionality that in a resolver, any Observable that it gets,
    it will subscribe to itself, we don't have to make a subscribe() call.
    BUT if we were making a getEvents() call somewhere else (in a component or another service),
    we would to sub to this Observable with a call to .subscribe().

    The reason we need to do the above is with HTTP observables, the HTTP request
    does NOT get made UNTIL someone subscribes to that Observable. SO if no
    one ever subscribes, that HTTP call will NOT happen.

    A common gotcha: you create an Observable, you return it from a method,
    so when you call that method you'd assume the Observable is going to happen
    since it's a call to get() on the HttpClient, BUT that HTTP call will
    not actually execute UNTIL someone subscribes to the Observable you created :)
  */
  resolve() {
    return this.eventService.getEvents();
  }
}
