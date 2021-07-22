//--------Activity number 4--------------

// import { NgIf } from '@angular/common';
// import { Component, OnInit ,Output, EventEmitter } from '@angular/core';

// @Component({
  // selector: 'app-root',
  // template: `
  // <p>My First Angular Component Count</p>
  // <br>
  // <p>Count:{{count}}</p>
  // <br>
  // <button (click)="AddEvent()">AddCount</button>
  // <br>
  // <button (click)="SubEvent()">SubCount</button>
  // <h5 *ngIf="count > 5" >second works!</h5>
  // `
       
  // ,
  // styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
  
//   @Output() appEvent = new EventEmitter();
//   constructor() { }

//   ngOnInit(): void {
//   }

//   AddEvent() {
//     this.appEvent.emit(this.count++);
  
//   }
//   SubEvent(){
//     this.appEvent.emit(this.count--);
//   }

  // title = 'Trial Activity';
  // appMessage = "";
  // count = 0;

  // appEvent(event:any){
  //   this.appMessage = event;
  // }

  

// }

//-------------- Activity Number 5 ----------------

import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Device } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   

  title = 'My First Angular Component';
  devices : Device []= [
    {
      name: "SMART TV",
      brand: "huawei",
      model: "Pro",
      year: "2021",
      serial:"ABCD123"
    },
    {
      name: "SMART WATCH",
      brand: "Apple",
      model: "Pro Max",
      year:"2021",
      serial:"ABCD456"
    },
    {
      name: "SMART PHONE",
      brand: "VIVO",
      model: "Y12S",
      year:"2021",
      serial:"ABCD456"
    }



  ]

}