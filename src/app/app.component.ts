import { Component } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { TopBarComponent } from './components/topbar/topbar.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopBarComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
