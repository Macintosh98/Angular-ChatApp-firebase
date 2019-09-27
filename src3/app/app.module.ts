import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment';

import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';

import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PaintComponent } from './workspace/paint/paint.component';
import { PaintService } from './workspace/paint.service';
import { CreateProjectComponent } from './create-project/create-project.component';
import { TodoComponent } from './workspace/todo/todo.component';
import { TodoListComponent } from './workspace/todo-list/todo-list.component';
import { ChatComponent } from './workspace/Chat/chat/chat.component';
import { ReceivedMessageComponent } from './workspace/Chat/received-message/received-message.component';
import { SentMessageComponent } from './workspace/Chat/sent-message/sent-message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FeatureComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    PaintComponent,
    CreateProjectComponent,
    TodoComponent,
    TodoListComponent,
    ChatComponent,
    ReceivedMessageComponent,
    SentMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ PaintService , FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
