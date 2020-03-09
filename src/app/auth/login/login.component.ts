import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@app/services/firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '@app/services/http.service';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Component({
  selector: 'monday-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl(environment.mock.user),
    password: new FormControl(environment.mock.password),
  });
  errorMessage = '';
  authResponse$: Observable<any>;

  constructor(
    private fireBaseService: FirebaseService,
    private httpService: HttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    // check
    this.fireBaseService.onAuthStateChanged().subscribe(user => {
      if (user) {
        this.authForm.disable();
        // redirect
        this.router.navigate([''])
      }
    });
  }

  onAuthError(err: Error) {
    console.log(err);
    this.errorMessage = err.message;
  }

  onSubmit() {
    this.authResponse$ = this.httpService.post('/auth/request', this.authForm.value);
    this.authResponse$.subscribe(token => {
      console.log('token', token);
      if (token) {
        this.fireBaseService.signInWithCustomAuth({token},
        this.onAuthError.bind(this))
      }
    });
    // this.fireBaseService.signIn(, this.onAuthError.bind(this));
  }

}
