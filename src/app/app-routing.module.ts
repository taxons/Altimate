import { AltiesComponent } from './page/alties/alties.component';
import { AuthGuardService } from './core/auth.guard';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ViewAltiesComponent } from './page/viewAlties/viewAlties.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: ViewAltiesComponent, canActivate: [AuthGuardService]},
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule, FormsModule
  ],
  declarations: []
})
export class AppRoutingModule { }
