import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hello',
  // templateUrl: './hello.component.html',
  template: `
    <div id = "body">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <p [class]="styleClass" >{{ message }}</p>
        <p>Result: {{ price * 1.08 }} yen</p>
        <p>Today: {{ today() }}</p>
    </div>
  `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string
  message:string
  price:number
  now:Date
  styleClass:string

  constructor() {
    setInterval(() => {
      this.now = new Date()
      this.styleClass = this.styleClass == 'red' ? '' : 'red'
    }, 1000)
  }

  ngOnInit(): void {
    this.title = 'Hello-app'
    this.message = 'This is my first component'
    this.price = 123450
    this.styleClass = 'red'
  }

  today() {
    return this.now.toLocaleString()
  }
}
