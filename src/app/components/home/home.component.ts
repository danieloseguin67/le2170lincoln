import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  content$: Observable<any>;

  constructor(
    private contentService: ContentService,
    private tourBookingService: TourBookingService,
    private router: Router
  ) {
    this.content$ = this.contentService.getContent();
  }

  ngOnInit(): void {
  }

  exploreApartments(): void {
    this.router.navigate(['/apartments']);
  }

  bookTour(): void {
    this.tourBookingService.showBookingForm();
  }
}
