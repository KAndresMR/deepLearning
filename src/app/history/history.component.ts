import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

  public history = [
    {
      imageUrl: 'path/to/image1.png',
      labels: ['Dog', 'Ball'],
      date: new Date('2024-12-19T10:30:00')
    },
    {
      imageUrl: 'path/to/image2.png',
      labels: ['Cat'],
      date: new Date('2024-12-19T11:00:00')
    }
  ];

  constructor() {}

}
