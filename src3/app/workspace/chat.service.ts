import { Injectable } from '@angular/core';
import { AngularFireDatabase, ChildEvent, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatMessage } from '../models/chat-message.model';
import * as firebase from 'firebase/app';
import { DataService } from '../data.service'
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: firebase.User;
  chatMessages:  any;
  chatMessage: ChatMessage;
  userName: string;
  m:any;
  path:any;
  projectKey:any;

  constructor(
    private db: AngularFireDatabase,
    private data : DataService
    //private afAuth: AngularFireAuth
  ) {

    this.data.currentMessage$.subscribe(message => {
      this.projectKey = message;
      this.path = 'projects/'+this.projectKey+'/'+'chat';
      console.log(this.path)
      this.chatMessages = this.db.list(this.path).valueChanges();
      console.log('created')
    });

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

  sendMessage1(msg: string) {
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

      this.db.list(this.path).push({
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
    console.log("my")
    console.log(this.chatMessages);
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


