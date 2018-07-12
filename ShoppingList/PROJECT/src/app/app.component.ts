import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recepe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  
  ngOnInit(){
      firebase.initializeApp(
              {
                  apiKey: "AIzaSyCd5DS-lrY3xC5AkoXGlfb2wdpyeF6t2s4",
                  authDomain: "ngrecipe-214ae.firebaseapp.com"
 
              }
      );
  }
}
