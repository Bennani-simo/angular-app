import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyBW6FUVnwM3A_O6qcfyeL4s5wBuipE7xDo",
      authDomain: "angular-app-34abe.firebaseapp.com",
      databaseURL: "https://angular-app-34abe.firebaseio.com",
      projectId: "angular-app-34abe",
      storageBucket: "angular-app-34abe.appspot.com",
      messagingSenderId: "637145471411",
      appId: "1:637145471411:web:2e31b56c6fba7f396093c6",
      measurementId: "G-4VVQ4L82TT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
