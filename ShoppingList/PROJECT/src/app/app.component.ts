import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recepe';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
