import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}
const routes: Routes = [
  // Define your routes here
  { path: '', component: LoginComponent }, 
  // { path: 'about', component: AboutComponent }, 
];
bootstrapApplication(App,{
  providers: [provideRouter(routes),],
});
