import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trial Activity';
  appMessage = "";

  appEvent(event:any){
    this.appMessage = event;
  }

}