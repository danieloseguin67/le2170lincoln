import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

@Component({
  selector: 'app-furnished-suites',
  imports: [CommonModule],
  templateUrl: './furnished-suites.component.html',
  styleUrl: './furnished-suites.component.scss'
})
export class FurnishedSuitesComponent implements OnInit {
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
