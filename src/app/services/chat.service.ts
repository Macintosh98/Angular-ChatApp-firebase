import { Injectable } from '@angular/core';
import { AngularFireDatabase, ChildEvent, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
//import { AngularFireAuth } from 'angularfire2/auth';
import { ChatMessage } from '../models/chat-message.model';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages:  any;
  chatMessage: ChatMessage;
  userName: string;
  m:any;

  constructor(
    private db: AngularFireDatabase,
    //private afAuth: AngularFireAuth
  ) {
    this.chatMessages = db.list('/messages').valueChanges(); 
      // this.afAuth.authState.subscribe(auth => {
      //   if (auth !== undefined && auth !== null) {
      //     this.user = auth;
      //   }

      //   this.getUser().subscribe(a => {
      //     this.userName = a.displayName;
      //   });
      // });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    //const email = this.user.email;
    const email ="a@gmail.com";
    //this.chatMessages = this.getMessages();
    // this.chatMessages.push({
    //   message: msg,
    //   timeSent: timestamp,
    //   //userName: this.userName,
    //   userName: "abhishek",
    //   email: email });

      this.db.list('/messages').push({
          message: msg,
          timeSent: timestamp,
          //userName: this.userName,
          userName: "abhishek",
          email: email });

          
  }

  getMessages(): any{
    // query to create our message feed binding
    //console.log(this.db.list('/messages').snapshotChanges);
    
    // firebase.database().ref('/messages').on("value", a=>this.m=a.val());
    // //   function(data) {
    // //     this.m=data.val();
    // //     console.log(data.val());
    // //  }, function (error) {
    // //     //console.log("Error: " + error.code);
    // //  });
        
      
    // console.log(this.m);
    return this.chatMessages;

  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
