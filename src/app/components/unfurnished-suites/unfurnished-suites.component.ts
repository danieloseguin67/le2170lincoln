import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

@Component({
  selector: 'app-unfurnished-suites',
  imports: [CommonModule],
  templateUrl: './unfurnished-suites.component.html',
  styleUrl: './unfurnished-suites.component.scss'
})
export class UnfurnishedSuitesComponent implements OnInit {
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
