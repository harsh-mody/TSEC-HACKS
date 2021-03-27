import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
    this.auth.register(this.email, this.passwd)
    this.router.navigate(['/login'])
    this.http.post(
      'https://rrt-app-database-default-rtdb.firebaseio.com/customerdetails.json', {Email: this.email, Twitter: this.twid,
      Facebook: this.faid, GPlus: this.gpid, First_name: this.fname, Last_Name: this.lname,
      Phone_no: this.pno, Address: this.address
    }
    ).subscribe(
      response => console.log(response)
    )
  }

  constructor(private auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
