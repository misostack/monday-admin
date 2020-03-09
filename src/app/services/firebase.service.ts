import { Injectable } from '@angular/core';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/database';

import { environment } from '@environments/environment';
import { BehaviorSubject } from 'rxjs';

interface IFirebaseErrorCallback {
  (error: Error);
}

interface IFirebaseDataCallback {
  (data: any)
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private authState$: BehaviorSubject<firebase.User> = new BehaviorSubject(null);
  private db:firebase.database.Database;

  constructor() {
    this.db = firebase.database()
    firebase.auth().onAuthStateChanged( user => this.authState$.next(user));
  }

  static initializeApp() {
    console.log('firebase Init never reload');
    firebase.initializeApp(environment.firebaseConfig);
  }

  signIn = ({email, password}, errorCallback: IFirebaseErrorCallback ) => {
    console.log('sign in', email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => errorCallback(err));
  }

  signInWithCustomAuth = ({token}, errorCallback: IFirebaseErrorCallback) => {
    const customToken = token ? token : environment.mock.token;
    firebase
    .auth()
    .signInWithCustomToken(
      customToken
    ).catch(err => errorCallback(err));
  }

  signOut = (errorCallback: IFirebaseErrorCallback) => {
    firebase.auth().signOut()
    .then(() => {})
    .catch(err  => errorCallback(err));
  }

  onAuthStateChanged = () => {
    return this.authState$.asObservable();
  }

  readMessages = (dataCallback: IFirebaseDataCallback, room = 1) => {
    console.log('fetch message')
    const messagesRef = this.db.ref(`messages/1`);
    messagesRef.on('value', snapshot => dataCallback(snapshot))
  }
}
