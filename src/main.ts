import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { SideNavComponent } from './app/side-nav/side-nav.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { AddemployeeComponent } from './app/addemployee/addemployee.component';
import { ApiListingComponent } from './app/api-listing/api-listing.component';
import { ApiListService } from './app/api-list.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'dashboard', component:SideNavComponent,
  children:[
      {path:'', redirectTo:'employee-list',pathMatch:'full'},
      {path:'employee-list',component:DashboardComponent},
      {path:'api-integration', component:ApiListingComponent},
      {path:'add-emp', component:AddemployeeComponent}
]}, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
bootstrapApplication(App,{
  providers: [provideRouter(routes),ApiListService,provideHttpClient()],
});
