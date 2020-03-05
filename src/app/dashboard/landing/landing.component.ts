import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@app/services/firebase.service';

@Component({
  selector: 'monday-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  messages: Array<any> = [];

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    
  }

  onReadMessages = () => {
    this.firebaseService.readMessages(this.readMessages.bind(this), 1);
  }

  readMessages = (snapshot) => {
    console.log(snapshot, snapshot.val())
    this.messages = snapshot.val()
  }

}
