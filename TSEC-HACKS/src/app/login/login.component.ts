import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  static isInvalid: boolean = false

  constructor(private auth: AuthService) { }

  onSubmit(emailRef: HTMLInputElement, passwordRef: HTMLInputElement){
    const email = emailRef.value
    const psswd = passwordRef.value
    this.auth.login(email, psswd)
    LoginComponent.PressedBtn = true
  }

  static PressedBtn  =  false

  ngOnInit(): void {
  }

}


