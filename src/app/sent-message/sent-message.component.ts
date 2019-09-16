import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.css']
})
export class SentMessageComponent {
  feed: any;

  constructor( private chat:ChatService){
    this.feed=this.chat.getMessages(); 
    console.log(this.feed);
  }
}
