import { AuthService } from './../core/auth.service';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private myForm: FormGroup;
  username: string;
  password: string;
  error: string;
  state: boolean;
  constructor(public firebaseAuth: AngularFireAuth, private router: Router, private as: AuthService) {
    this.error = '';
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }
  logout() {
    this.as.logout();
  }
  submitForm() {
    console.log('form submitted');
    console.log(this.username, this.password);
    this.state = this.as.loginWithPasswordTest(this.username, this.password);
    console.log(this.state);
    if (this.state === true) {
      this.router.navigate(['home']);
    }else {
      this.error = '**Authentication failed';
    }
  }

}
