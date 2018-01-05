import { NavbarModule } from './etc/navbar/navbar.module';
import { SidebarModule } from './etc/sidebar/sidebar.module';
import { FooterModule } from './etc/footer/footer.module';
import { FooterComponent } from './etc/footer/footer.component';
import { SidebarComponent } from './etc/sidebar/sidebar.component';
import { NavbarComponent } from './etc/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {NgModule} from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AltiesComponent } from './alties/alties.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      PageRoutingModule,
      NavbarModule,
      SidebarModule,
      FooterModule
    ],
    exports: [
      PageRoutingModule,
      NavbarModule,
      SidebarModule,
      FooterModule
    ],
    declarations: [
     HomeComponent,
     SidebarComponent,
     NavbarComponent,
     FooterComponent,
    AltiesComponent
],
    providers: []
  })

  export class PageModule {
  }
