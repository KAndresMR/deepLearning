import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss'
})
export class CameraComponent {
  public imageUrl: string | undefined;

  constructor() {}

  captureImage(event: any) {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
        
        video.addEventListener('canplay', () => {
          // Draw the image from the video stream onto the canvas
          context?.drawImage(video, 0, 0, canvas.width, canvas.height);
          this.imageUrl = canvas.toDataURL('image/png');
          stream.getTracks().forEach(track => track.stop());  // Stop video stream after capturing
        });
      });
  }
}