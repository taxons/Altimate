import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

   test: Date = new Date();
   isFooter: Boolean = false;
   constructor(public location: Location) { }

  ngOnInit() {
  }

}
