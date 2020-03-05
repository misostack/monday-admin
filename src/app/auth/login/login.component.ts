import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@app/services/firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'monday-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl('techlead@sonnm.com'),
    password: new FormControl('123456'),
  });
  errorMessage = '';

  constructor(
    private fireBaseService: FirebaseService,
    private router: Router
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
    console.log(err)
    this.errorMessage = err.message;
  }

  onSubmit() {
    this.fireBaseService.signIn(this.authForm.value, this.onAuthError.bind(this));
  }

}
