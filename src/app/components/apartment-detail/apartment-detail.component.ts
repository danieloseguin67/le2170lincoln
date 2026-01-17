import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface ApartmentDetail {
  id: number;
  title: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: number;
  images: string[];
  description: string;
  rooms: {
    [key: string]: {
      name: string;
      description: string;
      features: string[];
    }
  };
  amenities: string[];
  features: string[];
  specialMessage?: string;
  floorPlan?: string;
}

@Component({
  selector: 'app-apartment-detail',
  imports: [CommonModule],
  templateUrl: './apartment-detail.component.html',
  styleUrl: './apartment-detail.component.scss'
})
export class ApartmentDetailComponent implements OnInit {
  content$: Observable<any>;
  apartmentId: number = 0;
  apartment: ApartmentDetail | null = null;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService,
    private tourBookingService: TourBookingService
  ) {
    this.content$ = this.contentService.getContent();
  }

  // Make Object available to the template
  Object = Object;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apartmentId = +params['id'];
      console.log('Route param ID:', this.apartmentId);
      this.loadApartmentDetail();
    });
  }

  loadApartmentDetail(): void {
    // Add timeout to help debug loading issues
    setTimeout(() => {
      if (!this.apartment) {
        console.log('Timeout: Still no apartment loaded after 5 seconds');
      }
    }, 5000);

    this.content$.subscribe({
      next: (content) => {
        console.log('Content loaded:', content);
        console.log('Looking for apartment ID:', this.apartmentId);
        if (content?.apartments?.details) {
          console.log('Available apartments:', content.apartments.details);
          this.apartment = content.apartments.details.find((apt: ApartmentDetail) => apt.id === this.apartmentId);
          console.log('Found apartment:', this.apartment);
          if (!this.apartment) {
            console.log('No apartment found with ID:', this.apartmentId);
          }
        } else {
          console.log('No apartment details found in content');
          console.log('Content structure:', content);
          // Use fallback data for testing
          console.log('Using fallback apartment data');
          const fallbackApartment: ApartmentDetail = {
            id: this.apartmentId,
            title: this.apartmentId === 1 ? 'Studio Deluxe' : 'One Bedroom Premium',
            bedrooms: this.apartmentId === 1 ? 0 : 1,
            bathrooms: 1,
            sqft: this.apartmentId === 1 ? 450 : 650,
            price: this.apartmentId === 1 ? 1800 : 2200,
            images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'],
            description: 'Beautiful apartment with modern amenities.',
            rooms: {},
            amenities: ['Fitness center access', 'Rooftop terrace'],
            features: ['Floor-to-ceiling windows', 'Hardwood flooring']
          };
          this.apartment = fallbackApartment;
          console.log('Set fallback apartment:', this.apartment);
        }
      },
      error: (error) => {
        console.error('Error loading content:', error);
      }
    });
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  previousImage(): void {
    if (this.apartment && this.apartment.images.length > 0) {
      this.currentImageIndex = this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.apartment.images.length - 1;
    }
  }

  nextImage(): void {
    if (this.apartment && this.apartment.images.length > 0) {
      this.currentImageIndex = this.currentImageIndex < this.apartment.images.length - 1 ? this.currentImageIndex + 1 : 0;
    }
  }

  bookTour(): void {
    this.tourBookingService.showBookingForm();
  }

  goBack(): void {
    this.router.navigate(['/apartments']);
  }

  // Helper method to get room keys for template
  getRoomKeys(): string[] {
    return this.apartment?.rooms ? Object.keys(this.apartment.rooms) : [];
  }

  // Helper method to format price
  getFormattedPrice(): string {
    return this.apartment ? `$${this.apartment.price.toLocaleString()}` : '';
  }

  // Helper method to get bedroom display text
  getBedroomText(): string {
    if (!this.apartment) return '';
    return this.apartment.bedrooms === 0 ? 'Studio' : `${this.apartment.bedrooms} Bedroom${this.apartment.bedrooms > 1 ? 's' : ''}`;
  }
}
