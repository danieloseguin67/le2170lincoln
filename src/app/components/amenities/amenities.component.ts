import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

interface AmenityCategory {
  id: string;
  title: string;
  description: string;
  amenities: Amenity[];
}

@Component({
  selector: 'app-amenities',
  imports: [CommonModule],
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.scss'
})
export class AmenitiesComponent implements OnInit {
  content$: Observable<any>;

  amenityCategories: AmenityCategory[] = [
    {
      id: 'fitness-wellness',
      title: 'Fitness & Wellness',
      description: 'Stay active and healthy with our state-of-the-art facilities',
      amenities: [
        {
          id: 'fitness-center',
          title: 'Fitness Center',
          description: 'Fully equipped gym with modern cardio and strength training equipment',
          icon: '💪',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          features: ['24/7 Access', 'Premium Equipment', 'Personal Training Available', 'Yoga Studio']
        },
        {
          id: 'spa-wellness',
          title: 'Spa & Wellness Center',
          description: 'Relax and rejuvenate in our luxury spa facilities',
          icon: '🧘‍♀️',
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          features: ['Massage Therapy', 'Sauna & Steam Room', 'Meditation Room', 'Wellness Programs']
        }
      ]
    },
    {
      id: 'recreation',
      title: 'Recreation & Entertainment',
      description: 'Enjoy leisure time with premium recreational facilities',
      amenities: [
        {
          id: 'rooftop-terrace',
          title: 'Rooftop Terrace',
          description: 'Stunning city views from our exclusive rooftop space',
          icon: '🏙️',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          features: ['Panoramic Views', 'Outdoor Seating', 'BBQ Areas', 'Event Space']
        },
        {
          id: 'swimming-pool',
          title: 'Swimming Pool',
          description: 'Resort-style pool with lounge areas',
          icon: '🏊‍♂️',
          image: 'https://images.unsplash.com/photo-1544989164-fb7b49cdef5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          features: ['Heated Pool', 'Pool Deck', 'Cabanas', 'Hot Tub']
        }
      ]
    },
    {
      id: 'community',
      title: 'Community Spaces',
      description: 'Connect with neighbors in beautifully designed social areas',
      amenities: [
        {
          id: 'resident-lounge',
          title: 'Resident Lounge',
          description: 'Sophisticated communal space for relaxation and socializing',
          icon: '🛋️',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          features: ['Comfortable Seating', 'WiFi', 'Kitchen Access', 'Entertainment System']
        },
        {
          id: 'business-center',
          title: 'Business Center',
          description: 'Professional workspace for remote work and meetings',
          icon: '💼',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          features: ['High-Speed Internet', 'Meeting Rooms', 'Printing Services', 'Private Offices']
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Convenience',
      description: 'Premium services to make your life easier',
      amenities: [
        {
          id: 'concierge',
          title: 'Concierge Service',
          description: '24/7 assistance for all your needs',
          icon: '🎩',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
          features: ['24/7 Availability', 'Package Management', 'Reservations', 'Local Recommendations']
        },
        {
          id: 'parking-storage',
          title: 'Parking & Storage',
          description: 'Secure parking and storage solutions',
          icon: '🚗',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          features: ['Secure Garage', 'EV Charging', 'Storage Units', 'Bike Storage']
        }
      ]
    }
  ];

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
