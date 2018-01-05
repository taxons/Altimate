import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: 'alties', title: 'GoAlties',  icon: 'pe-7s-user', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor( private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  openLink(path: string) {
    console.log(path);
    this.router.navigate([path]);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  }

}
