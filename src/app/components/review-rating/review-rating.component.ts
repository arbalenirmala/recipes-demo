import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-review-rating',
    imports: [FormsModule, CommonModule],
    templateUrl: './review-rating.component.html',
    styleUrl: './review-rating.component.scss'
})
export class ReviewRatingComponent {
  @Input() maxStars: number = 5; // Total number of stars
  @Input() existingRating: number = 0; // Existing rating to display
  @Output() ratingChange = new EventEmitter<number>(); // Event for updated rating

  stars: number[] = [];
  currentRating: number = 0;

  constructor() {
    this.stars = Array(this.maxStars).fill(0);  
  }

  ngOnInit() {
    this.currentRating = this.existingRating; // Initialize with existing rating
  }

  setRating(value: number): void {
    this.currentRating = value; // Update the current rating
    this.ratingChange.emit(this.currentRating); // Emit the new rating
  }
}
