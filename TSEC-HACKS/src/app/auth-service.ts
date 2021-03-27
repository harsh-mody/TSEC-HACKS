import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import * as firebase from 'firebase' 
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { LoginComponent } from './login/login.component'
import Swal from 'sweetalert2';


@Injectable()
export class AuthService{
    constructor(private router : Router){

    }
    
    register(email: string, password: string){
        firebase.default.auth().createUserWithEmailAndPassword(email, password).catch(
            error => Swal.fire('Error!', 'Something went Wrong!!', 'error')
        )
    }

    login(email: string, password: string){
        const app = new AppComponent
        firebase.default.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            this.router.navigate(['/']);
            Swal.fire('Success!', 'Login Successful', 'success')
         }).catch(error => Swal.fire('Error!', 'Invalid Email or Password', 'error')
        )
    }

}