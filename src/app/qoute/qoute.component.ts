import { Component, OnInit, } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  quotes: Quotes[] =[
new Quotes (1, "No human is limited.","Eliud Kipchoge","Faith",new Date(2020,8,20),0,0),
new Quotes (2, "You are the world and the world is you.","Krishnamurati","Faith",new Date(2021,1,16),0,0)
  ]
  uploadQuote(event: any) {
  
    event.completeDate = new Date(event.completeDate);
    this.quotes.push(event);
  }

 addLikes(qId:number){
   qId-=1
    let addvote = this.quotes[qId].like + 1;
    this.quotes[qId].like = addvote;
  } 

  addDislikes(qId:number){
    qId-=1
    let adddislike = this.quotes[qId].dislike + 1;
    this.quotes[qId].dislike = adddislike;
  } 

  todeleQuote( index:number){
    let deleteQuote = confirm(`Are you sure you want to delete --> ${this.quotes[index].name}`);
    if (deleteQuote){
      this.quotes.splice(index,1);
    }

}


  constructor() { }

  ngOnInit(): void {
  }

}
