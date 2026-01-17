import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

@Component({
  selector: 'app-lifestyle',
  imports: [CommonModule],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.scss'
})
export class LifestyleComponent implements OnInit {
  content$: Observable<any>;

  constructor(
    private contentService: ContentService,
    private tourBookingService: TourBookingService
  ) {
    this.content$ = this.contentService.getContent();
  }

  ngOnInit(): void {}

  bookTour(): void {
    this.tourBookingService.showBookingForm();
  }
}
