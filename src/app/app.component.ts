import { NgIf } from '@angular/common';
import { Component, OnInit ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>My First Angular Component Count</p>
  <br>
  <p>Count:{{count}}</p>
  <br>
  <button (click)="AddEvent()">AddCount</button>
  <br>
  <button (click)="SubEvent()">SubCount</button>
  <h5 *ngIf="count > 5" >second works!</h5>
  `
       
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @Output() appEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  AddEvent() {
    this.appEvent.emit(this.count++);
  
  }
  SubEvent(){
    this.appEvent.emit(this.count--);
  }

  // title = 'Trial Activity';
  // appMessage = "";
  count = 0;

  // appEvent(event:any){
  //   this.appMessage = event;
  // }

  

}