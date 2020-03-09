import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '@app/services/firebase.service';
import { HttpService } from '@app/services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'monday-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  errorMessage: string;
  users$: Observable<any>;
  

  constructor(
    private router: Router,
    private firebaseService: FirebaseService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  signOutError(error: Error) {
    console.error(error);
    this.errorMessage = error.message;
  }

  signOut() {
    this.firebaseService.signOut(this.signOutError.bind(this));
    this.router.navigate(['auth']);
  }

  fetchUsers() {
    this.users$ = this.httpService.get('/users');
  }
}
