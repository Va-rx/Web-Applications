import { ChangeDetectionStrategy, Injectable, resolveForwardRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Roles, User } from './model/user';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { doc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser!: User;
  auth = getAuth();
  persistence: string = "local";
  roless!: Roles;
  testUser!: User;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { 
    onAuthStateChanged(this.auth, (user) => {

      // niestety brakuje w całym projekcie pobieranie danych usera z firebase jezeli chodzi o role. Zmieniają sie one aktualnie w firebase natomiast nie udało
      // mi się mądrze przyporządkowac ich do usera pobierając za pomoca uid dlatego w  celu sprawdzenia aplikacji i dostepnosci na sztywno tutaj
      // ustawiam role
      if(user && user.email != null) {
        // na sztywno ustawilem aby mogl Pan latwo zalogowac sie jako admin/ user
          if(user.uid == 'XZeUdSrM7JUB1rns5U31DLLSrBq2')
          this.currentUser = {
          uid: user.uid,
          email: user.email,
          roles: {
            admin: true,
            menager: true,
            client: true,
            banned: false,
          }
        }
        if(user.uid == 'NaNchfSEfdRdlYyqTkzKQvponD23')
          this.currentUser = {
          uid: user.uid,
          email: user.email,
          roles: {
            admin: false,
            menager: false,
            client: true,
            banned: false,
          }
        }

        
        // prawidlowa wersja ponizej tylko problem z pobraniem rol za pomoca uid :/

        // this.currentUser = {
        //   uid: user.uid,
        //   email: user.email,
        //   roles: {
        //     admin: true,
        //     menager: false,
        //     client: true,
        //     banned: false,
        //   }
        // }
      }
    })
  }

  signUp(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      if(res.user && res.user.uid) {
      console.log("udało się zarejestrować", res);
      let user = {
        uid: res.user?.uid,
        email: email,
        roles: {
              admin: false,
              menager: false,
              client: true,
              banned: false,
            }
      }
      this.db.collection("Users").doc((res.user.uid).toString()).set(user);
      this.router.navigate(['']);
    }
    })
    .catch(error => {
      console.log("nie udało się zarejestrować", error);
    });
  }
  
  signIn(email: string, password: string) {

    this.afAuth.setPersistence(this.persistence).then(() => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
        console.log("udało się zalogować", res);
        this.router.navigate(['']);
      })
      .catch(error => {
        console.log("nie udało się zalogować", error);
      })
    })
  }

  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['']);
  }

  getAllUsers() {
    return new Promise<any>((resolve) => {
      this.db.collection("Users").valueChanges({ idField: 'uid' }).subscribe(users => resolve(users));
    })
  }

  userUpdate(user: User) {
    this.db.doc(`Users/${(user.uid)}`).update({roles: {admin: user.roles.admin, menager: user.roles.menager, 
      client: user.roles.client, banned: user.roles.banned}})
  }
}
