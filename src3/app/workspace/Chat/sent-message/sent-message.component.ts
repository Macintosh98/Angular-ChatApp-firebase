import { Component } from '@angular/core';
import { ChatService } from '../../chat.service';

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
