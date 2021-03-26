import { Injectable } from '@angular/core'
import * as firebase from 'firebase' 

@Injectable()
export class AuthService{
    register(email: string, password: string){
        firebase.default.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)
        )
    }

    login(email: string, password: string){
        firebase.default.auth().signInWithEmailAndPassword(email, password).then(
            response => console.log(response)
        ).catch(
            error => console.log(error)
        )
    }

}