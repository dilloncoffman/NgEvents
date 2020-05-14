import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { appRoutes } from './routes';

import {
  CreateEventComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventService,
  EventRouteActivatorService,
  EventsListResolverService,
  DurationPipe,
  VoterService,
} from './events/index';
import {
  JQUERY_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
} from './common/index'; // import token to define in Angular dependency registry to use instance of toastr
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
import { LocationValidatorDirective } from './events/location-validator.directive';
let toastr: Toastr = window['toastr']; // let TypeScript know not to worry about Toastr since we know it's something declared in our global scope
let jQuery: Object = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventsListResolverService,
    AuthService,
    VoterService,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
