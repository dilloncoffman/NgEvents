import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class UserModule {}
