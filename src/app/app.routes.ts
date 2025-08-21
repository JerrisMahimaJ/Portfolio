import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent }
];
