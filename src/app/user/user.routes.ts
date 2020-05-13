import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const userRoutes = [
  // /user/profile
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];
