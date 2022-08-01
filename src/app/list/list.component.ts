import { Component, OnInit } from '@angular/core';
import { ticketValues } from '../listData';
import { ticketname } from '../name';
import { images } from '../images';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tickets = ticketValues;
  
  name = ticketname;

  image = images;


  open(n:any){
    if(n=='open'){
      return this.openTickets;
    }
    if(n=='review'){
      return this.reviewTickets;
    } 
    if(n=='closed'){
      return this.closedTickets;
    } 
    if(n=='progress'){
      return this.progressTickets;
    }
    else {
      return "invalid";
    }
  }



  openTickets = ticketValues.filter(
    n => n.ticketName == 'open'
  )
  progressTickets = ticketValues.filter(
    n => n.ticketName == 'progress'
  )  
  reviewTickets = ticketValues.filter(
    n => n.ticketName == 'review'
  )
  closedTickets = ticketValues.filter(
    n => n.ticketName == 'closed'
  )
  

  constructor() { }

  ngOnInit(): void {
  }

}
