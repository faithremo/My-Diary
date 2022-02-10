import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  quotes: Quotes[] =[
new Quotes ("No human is limited.","Eliud Kipchoge","Faith",new Date(2020,8,20)),
new Quotes ("You are the world and the world is you.","Krishnamurati","Faith",new Date(2021,1,16))
  ]
  uploadQuote(event: any) {
  
    event.completeDate = new Date(event.completeDate);
    this.quotes.push(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
