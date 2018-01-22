import { Alties, Experience } from './../alties/alties.component';
import { AltiService } from './../alti.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewalties',
  templateUrl: './viewAlties.component.html',
  styleUrls: ['./viewAlties.component.scss']
})
export class ViewAltiesComponent implements OnInit {

  myForm: FormGroup;
  alties: Alties[];
  errorMessage: string;
  constructor(private router: Router, private altiService: AltiService) {

   }

  ngOnInit() {
    this.altiService.getAlties().subscribe(
      alties => this.alties = alties,
      error => this.errorMessage = <any> error);
  }
  viewAlti(altiId) {
    console.log(altiId);
    this.router.navigate(['alties' + '/' + altiId]);
  }

}
