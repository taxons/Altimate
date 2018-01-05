import { AltiesComponent } from './alties/alties.component';
import { AuthGuardService } from './../core/auth.guard';
import { HomeComponent } from './home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';

const pageRoutes: Routes = [
    {path: 'home', component: HomeComponent , canActivate: [AuthGuardService]},
    {path: 'alties', component: AltiesComponent , canActivate: [AuthGuardService]}
  ];

  @NgModule({
    imports: [RouterModule.forChild(pageRoutes)],
    exports: [RouterModule]
  })

  export class PageRoutingModule {
}

