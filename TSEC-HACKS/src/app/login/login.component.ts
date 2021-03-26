import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onSubmit(emailRef: HTMLInputElement, passwordRef: HTMLInputElement){
    const email = emailRef.value
    const psswd = passwordRef.value
    console.log(email, psswd)
  }

  ngOnInit(): void {
  }

}


