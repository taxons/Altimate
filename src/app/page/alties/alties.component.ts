import { AltiService } from './../alti.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

export interface Alties {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: string;
  experience: Experience;
}
export interface Experience {
  years: string;
  month: string;
}

@Component({
  selector: 'app-alties',
  templateUrl: './alties.component.html',
  styleUrls: ['./alties.component.scss']
})
export class AltiesComponent implements OnInit {
  myForm: FormGroup;
  alties: Alties;
  status: string;
  errorMessage: string;
  constructor(private router: Router, private altiService: AltiService) {
    this.alties = <Alties>{};
    this.alties.experience = <Experience>{};
    this.alties.name = '';
    this.alties.email = '';
    this.alties.phone = '';
    this.alties.age = '';
    this.alties.email = '';
    this.alties.experience.month = '1';
    this.alties.experience.years = '4';
    this.status = '';
   }

  ngOnInit() {
  }
  submitForm(alties: Alties) {
    console.log(alties);
    console.log(this.alties);
    alties.id = null;
    this.altiService.addAlties(alties).subscribe(
      new_owner => {
        // this.alties = new_owner;
        // this.gotoOwnersList();
        this.status = 'Sucessfully added';
      },
      error => this.errorMessage = <any>error
    );
    console.log('form submitted');
  }

}
