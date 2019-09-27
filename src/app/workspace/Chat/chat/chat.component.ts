import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message:string;
  
  constructor(private chat:ChatService) {

  }

  ngOnInit() {
  }

  send(){
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event){
    if (event.keyCode === 13){
      this.send();
    }
  }
}
