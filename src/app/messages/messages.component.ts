import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService) { }
  a:any = []
  ngOnInit() {
    this.a= this.messageService.messages
    console.log('aaaaa',this.a)
  }

}
