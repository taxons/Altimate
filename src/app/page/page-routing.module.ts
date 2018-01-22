import { ViewAltiesComponent } from './viewAlties/viewAlties.component';
import { AltiesComponent } from './alties/alties.component';
import { AuthGuardService } from './../core/auth.guard';
import { HomeComponent } from './home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InterviewSchedularComponent } from './interview-schedular/interview-schedular.component';

const pageRoutes: Routes = [
    {path: 'home', component: HomeComponent , canActivate: [AuthGuardService]},
    {path: 'alties', component: ViewAltiesComponent , canActivate: [AuthGuardService]},
    {path: 'alties/:id', component: InterviewSchedularComponent , canActivate: [AuthGuardService]},
    {path: 'newalties', component: AltiesComponent , canActivate: [AuthGuardService]}
  ];

  @NgModule({
    imports: [RouterModule.forChild(pageRoutes)],
    exports: [RouterModule]
  })

  export class PageRoutingModule {
}

