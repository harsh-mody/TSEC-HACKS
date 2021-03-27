import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLogin : boolean = true
  title : string

  @Output() static loggedin = new EventEmitter<{isLogin: boolean}>()

  constructor() { 
    this.title = AppComponent.title
    if(LoginComponent.PressedBtn) this.isLogin = false
  }

  ngOnInit(): void {
  }

}
