import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  static title = 'RunTime Terror App';
  
  ngOnInit(){
    firebase.default.initializeApp(
      {
        apiKey: "AIzaSyB4jEWKElXdbE3nyDeMBpoteuV0AQbAwQk",
      authDomain: "rrt-app-database.firebaseapp.com",
      databaseURL: "https://rrt-app-database-default-rtdb.firebaseio.com",
     projectId: "rrt-app-database",
     storageBucket: "rrt-app-database.appspot.com",
    messagingSenderId: "19470043858",
    appId: "1:19470043858:web:2f1bb6643f64ea230d3b0b",
    measurementId: "G-1RQERPR1SB"
      }
    )
  }
}
