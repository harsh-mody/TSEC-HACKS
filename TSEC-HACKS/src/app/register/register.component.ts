import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPage = true
  socialMediaPage = false
  personalPage = false
  email:string = ''
  passwd:string = ''
  passwdcon:string = ''
  twid:string = ''
  faid:string = ''
  gpid:string = ''
  fname:string = ''
  lname:string = ''
  pno: string = ''
  address : string = ''


  onNext(){
    this.emailPage = false
    this.socialMediaPage = true
  }

  onNext2(){
    this.socialMediaPage = false
    this.personalPage = true
  }

  onPrevious(){
    this.socialMediaPage = false
    this.emailPage = true
  }

  onPrevious2(){
    this.personalPage = false
    this.socialMediaPage = true
  }

  onSubmit() {
    this.auth.register('neerajpatil342@gmail.com', 'yw12-yu32')
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
