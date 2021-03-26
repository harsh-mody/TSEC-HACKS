import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedin = true
  title : string

  isLogin=()=>{return this.loggedin}

  constructor() { 
    this.title = AppComponent.title
  }

  ngOnInit(): void {
  }

}
