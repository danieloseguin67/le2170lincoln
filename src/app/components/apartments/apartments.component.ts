import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface Apartment {
  id: number;
  title: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: number;
  image: string;
}

@Component({
  selector: 'app-apartments',
  imports: [CommonModule],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.scss'
})
export class ApartmentsComponent implements OnInit {
  content$: Observable<any>;
  apartments: Apartment[] = [
    {
      id: 1,
      title: 'Studio Deluxe',
      bedrooms: 0,
      bathrooms: 1,
      sqft: 450,
      price: 1800,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      title: 'One Bedroom Premium',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      price: 2200,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'Two Bedroom Executive',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 950,
      price: 2800,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
    },
    {
      id: 4,
      title: 'Two Bedroom Penthouse',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1100,
      price: 3200,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80'
    }
  ];

  constructor(
    private contentService: ContentService,
    private tourBookingService: TourBookingService,
    private router: Router
  ) {
    this.content$ = this.contentService.getContent();
  }

  ngOnInit(): void {
  }

  viewDetails(apartmentId: number): void {
    this.router.navigate(['/apartments', apartmentId]);
  }

  bookTour(): void {
    this.tourBookingService.showBookingForm();
  }
}
