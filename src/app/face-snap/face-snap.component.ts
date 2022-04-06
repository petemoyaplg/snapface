import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit
{
  @Input() faceSnap!: FaceSnap;
  buttonText!: String;

  ngOnInit(): void {
    this.buttonText = 'Oh Snap !';
  }

  onSnap(): void {
    console.log('====================================');
    console.log("onSnap");
    console.log('====================================');
    if (this.buttonText === 'Oh Snap !') {
      this.faceSnap.snaps+=this.faceSnap.snaps+100;
      this.buttonText = 'Oups, unSnap !';
    } else {
      this.faceSnap.snaps-=this.faceSnap.snaps-50;
      this.buttonText = 'Oh Snap !';
    }
  }
}
