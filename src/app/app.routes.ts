import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'our-team', component: OurTeamComponent },
      { path: 'contacts', component: ContactsComponent }
    ]
  },
];