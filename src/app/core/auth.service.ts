import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(public firebaseAuth: AngularFireAuth) {
    this.authcurrentstate = false;
  }

  authcurrentstate: boolean;
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === 'logged') {
      this.authcurrentstate = true;
    }
    return this.authcurrentstate;
  }
  public loginWithPasswordTest(email: string, password: string) {
    console.log(email);
    console.log(password);
    if (email === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'logged');
      this.authcurrentstate = true;
      return true;
    }
    localStorage.setItem('token', 'null');
    return false;
  }
  public loginWithPassword(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.firebaseAuth.auth.signInWithCredential(credential);
  }
  public signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  public logout() {
    // this.firebaseAuth
    //   .auth
    //   .signOut();
    localStorage.setItem('token', null);
    console.log('logout done');
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.firebaseAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        console.log('logged in');
      });
  }

}
