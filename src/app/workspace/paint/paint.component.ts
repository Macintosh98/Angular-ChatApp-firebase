import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs'
import { mergeMap, takeUntil, switchMap } from 'rxjs/operators'
import { PaintService } from '../paint.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database'
import { Router , ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})

export class PaintComponent implements OnInit {

  projectKey : any;
  message:string ="hii";

  constructor(private paintSvc: PaintService,
             private elRef: ElementRef , 
             private db: AngularFireDatabase ,
             private router: Router ,
             private route : ActivatedRoute ){ 
              }

  ngOnInit(){
    //console.log(this.elRef)
    this.route.queryParams.subscribe((params) => this.projectKey = params['id'])
    this.paintSvc.initialize(this.elRef.nativeElement , this.projectKey)
    this.startPainting()
  }
  
  ngAfterViewInit() {
  }

  Clear()
  { 
    this.paintSvc.clear();
  }

  Download()
  { 
    this.paintSvc.takeSnapshot();
  }

  Upload()
  { 
    this.paintSvc.restore();
  }

  Eraser()
  {
    this.paintSvc.eraser();
  }

  private startPainting() {

    const { nativeElement } = this.elRef;
    const canvas = nativeElement.querySelector('canvas') as HTMLCanvasElement
    
    const move$ = fromEvent<MouseEvent>(canvas, 'mousemove')
    const down$ = fromEvent<MouseEvent>(canvas, 'mousedown')
    const up$ = fromEvent<MouseEvent>(canvas, 'mouseup')
    const keyboard$ = fromEvent<KeyboardEvent>(window, 'keypress')

    const paints$ = down$.pipe(
      mergeMap(down => move$.pipe(takeUntil(up$)))
      // mergeMap(down => move$)
    );
     
    const offset = getOffset(canvas)
    
      paints$.subscribe((event) => {
        const clientX = event.clientX - offset.left
        const clientY = event.clientY - offset.top
        const event_name = 'move'
        this.paintSvc.store( { clientX, clientY , event_name })
      });

      /*move$.subscribe((event ) => {
        const clientX = event.clientX - offset.left
        const clientY = event.clientY - offset.top
        this.paintSvc.store( { clientX, clientY })
      });

      up$.subscribe((event ) => {
        const clientX = event.clientX - offset.left
        const clientY = event.clientY - offset.top
        this.paintSvc.store( { clientX, clientY })
      });*/
      
      down$.subscribe((event) => {
        const clientX = event.clientX - offset.left
        const clientY = event.clientY - offset.top
        const event_name = 'down'
        this.paintSvc.store( { clientX, clientY , event_name})
      });
      
      // move$.subscribe((event) => {
      //   const clientX = event.clientX - offset.left
      //   const clientY = event.clientY - offset.top
      //   const event_name = 'move'
      //   this.paintSvc.store( { clientX, clientY , event_name})
      // });

      up$.subscribe((event) => {
        const clientX = event.clientX - offset.left
        const clientY = event.clientY - offset.top
        const event_name = 'up'
        this.paintSvc.store( { clientX, clientY , event_name})
      });

      keyboard$.subscribe((event) => {
        this.paintSvc.selectColor(event.keyCode);
      });

    
  } 
}

function getOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top ,
    left: rect.left
  }
}

