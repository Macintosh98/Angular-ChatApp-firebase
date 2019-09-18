import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

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

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
