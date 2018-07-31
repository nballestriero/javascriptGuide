import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { User } from './user'
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfService {
  user$: Observable<User>; //<firebase.User>
  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) {
      this.user$ = afAuth.authState.pipe(
              switchMap(user=>{
                  if(user){
                      return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
                  }else{
                      return of(null);   //Observable.of() check it out                   
                  }
              })
      );
  }
  loginWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then((credential) =>{
          this.updateUser(credential.user);
      });
  }
  
  updateUser(user){
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
      const data: User = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              roles: {
                  subscriber: true,
                  admin: false
              }
      }
      return userRef.set(data, {merge: true});
  }
  logout(){
      this.afAuth.auth.signOut();
  }
}
