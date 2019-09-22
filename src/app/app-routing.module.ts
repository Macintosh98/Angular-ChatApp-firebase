import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeatureComponent } from './feature/feature.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,

  },
  {
    path: '',
    component: ContentComponent,

  },
  {
    path: 'about',
    component: AboutComponent,

  },
  {
    path: 'contact',
    component: ContactusComponent,

  },
  {
    path: 'feature',
    component: FeatureComponent,

  },
  {
    path: 'signup',
    component: RegistrationComponent,

  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'logout',
    component: LogoutComponent,

  },
  {
    path: 'profile',
    component: ProfileComponent,

  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
