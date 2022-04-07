import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: String;

  constructor(
    private faceSnapsService: FaceSnapService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onViewSnapFace(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
