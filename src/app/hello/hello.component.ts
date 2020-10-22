import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string
  message:string
  price:number
  now:Date

  constructor() {
    setInterval(() => this.now = new Date(), 1000)
  }

  ngOnInit(): void {
    this.title = 'Hello-app'
    this.message = 'This is my first component'
    this.price = 123450
  }

  today() {
    return this.now.toLocaleString()
  }
}
