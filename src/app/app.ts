import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
    <a routerLink="/home" routerLinkActive="active-link">Home</a>
    <a routerLink="/projects" routerLinkActive="active-link">Projects</a>
    <a routerLink="/skills" routerLinkActive="active-link">Skills</a>
  </nav>

  <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #f4f4f4;
    }
    a {
      text-decoration: none;
      color: #007bff;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}
