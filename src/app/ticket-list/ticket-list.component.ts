import { Component, OnInit } from '@angular/core';
import { ticketList } from '../ticketListData';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  ticketListTable = ticketList;

  constructor() { }

  ngOnInit(): void {
  }

}
