import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'connect', component: ConnectComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'tech', component: TechComponent},
  // base route redirect to 
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
