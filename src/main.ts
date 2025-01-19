import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { SideNavComponent } from './app/side-nav/side-nav.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { SettingsComponent } from './app/settings/settings.component';

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
  { path: 'login', component: LoginComponent },
  { path:'dashboard', component:SideNavComponent,
  children:[
      {path:'', redirectTo:'employee-list',pathMatch:'full'},
      {path:'employee-list',component:DashboardComponent},
      {path:'api-integration', component:SettingsComponent}
]}, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  // { path: 'about', component: AboutComponent }, 
];
bootstrapApplication(App,{
  providers: [provideRouter(routes),],
});
