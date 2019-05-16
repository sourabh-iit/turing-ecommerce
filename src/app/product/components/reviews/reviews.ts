import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.html'
})
export class ReviewsComponent {

  @Input() reviews: Review[];

  constructor(
  ) {
  }

}
