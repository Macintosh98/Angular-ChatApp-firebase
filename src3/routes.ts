import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { FeatureComponent } from './app/feature/feature.component';
import { HomeComponent } from './app/home/home.component';
import { RegistrationComponent } from './app/auth/registration/registration.component';
import { LoginComponent } from './app/auth/login/login.component';
import { LogoutComponent } from './app/auth/logout/logout.component';
import { PaintComponent } from './app/workspace/paint/paint.component';
import { CreateProjectComponent } from './app/create-project/create-project.component';


export const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '' , component: HomeComponent },
    { path: 'feature', component: FeatureComponent },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'workspace', component: PaintComponent },
    { path: 'project', component: CreateProjectComponent },
];
