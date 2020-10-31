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
  styleClass:string
  count: number
  input: string

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
    this.count = 0
    this.input = ''
  }

  today() {
    return this.now
  }

  doCount() {
    return this.message = ++this.count + "回クリックしました"
  }

  doType(val:string) {
    this.input = val
    this.message = 'you type: ' + this.input
  }
}
