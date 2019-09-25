import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { CommentStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})

export class AprojectService {
  
  cproject = this.firebase.database.ref('projects')
  
  constructor(private firebase: AngularFireDatabase ) 
  { 
  }

  // getProjects() 
  // { 
  //   const project = this.firebase.database.ref('projects').orderByKey().on('value' , 
  //   function(snapshot){
  //     snapshot.forEach( function(snapshot){
  //         console.log(snapshot.key)
  //         console.log(snapshot.val())
  //       }
  //     )
  //   }
  //   );
  // }

  insertcproject(cproject) : string 
  {  
     let projectKey = this.cproject.push({}).key

     this.cproject.child(projectKey).set({
        name: cproject.name,
        description: cproject.description,
        language: cproject.language,
        platform: cproject.platform,
      });

      this.SetToDefault(projectKey)
      return projectKey
  }

  SetToDefault(projectkey)
  {
    this.cproject.child(projectkey).child('sketch').child(`coordinates`).set({
      x1: 0 , 
      y1: 0 , 
      x2: 0 , 
      y2: 0 ,
    });

    this.cproject.child(projectkey).child('sketch').child(`status`).set({
      status : 0
    });

    this.cproject.child(projectkey).child('sketch').child(`freehand`).set({
      x1 : 0 ,
      y1 : 0 ,
      x2 : 0 ,
      y2 : 0 
    });

    this.cproject.child(projectkey).child('sketch').child(`attributes`).set({
      color : 'black' ,
      size : 5 ,
      shape : 'point'
    }); 
  }

  // Display()
  // { 
  //   this.firebase.database.ref('projects').orderByChild('name').equalTo('Gideon').on('value' ,
  //   function(snapshot){
  //     console.log("Display function")
  //     snapshot.forEach(function(snap){
  //         console.log(snap.key)
  //     })
  //   })
  // }
}
