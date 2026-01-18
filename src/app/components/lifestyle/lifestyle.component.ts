import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface LifestyleFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  highlights: string[];
}

interface LifestyleCategory {
  id: string;
  title: string;
  description: string;
  features: LifestyleFeature[];
}

@Component({
  selector: 'app-lifestyle',
  imports: [CommonModule],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.scss'
})
export class LifestyleComponent implements OnInit {
  content$: Observable<any>;

  lifestyleCategories: LifestyleCategory[] = [
    {
      id: 'montreal-living',
      title: 'Montreal Living',
      description: 'Experience the vibrant culture and dynamic lifestyle of Montreal',
      features: [
        {
          id: 'downtown-access',
          title: 'Downtown Access',
          description: 'Minutes away from Montreal\'s bustling downtown core with world-class shopping, dining, and entertainment',
          icon: '🏙️',
          image: 'assets/images/montreallifestyle1.jpg',
          highlights: ['Shopping Districts', 'Fine Dining', 'Entertainment Venues', 'Business Centers']
        },
        {
          id: 'cultural-hub',
          title: 'Cultural Hub',
          description: 'Immerse yourself in Montreal\'s rich cultural scene with festivals, museums, and artistic communities',
          icon: '🎨',
          image: 'assets/images/montreallifestyle2.jpg',
          highlights: ['Art Galleries', 'Music Festivals', 'Theater District', 'Historic Sites']
        }
      ]
    },
    {
      id: 'urban-convenience',
      title: 'Urban Convenience',
      description: 'Everything you need within walking distance or a short transit ride',
      features: [
        {
          id: 'transit-access',
          title: 'Transit Excellence',
          description: 'Connected to Montreal\'s extensive metro and bus network for effortless city navigation',
          icon: '🚇',
          image: 'assets/images/montreallifestyle3.jpg',
          highlights: ['Metro Access', 'Bus Routes', 'BIXI Bike Share', 'Walkable Neighborhood']
        },
        {
          id: 'local-amenities',
          title: 'Local Amenities',
          description: 'Surrounded by grocery stores, cafes, pharmacies, and essential services',
          icon: '🏢',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Grocery Stores', 'Coffee Shops', 'Healthcare', 'Banking Services']
        }
      ]
    },
    {
      id: 'recreation-wellness',
      title: 'Recreation & Wellness',
      description: 'Maintain an active and healthy lifestyle with nearby parks and facilities',
      features: [
        {
          id: 'parks-recreation',
          title: 'Parks & Recreation',
          description: 'Access to beautiful parks, trails, and recreational facilities year-round',
          icon: '🌳',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Mount Royal Park', 'Cycling Paths', 'Outdoor Sports', 'Seasonal Activities']
        },
        {
          id: 'dining-nightlife',
          title: 'Dining & Nightlife',
          description: 'Explore Montreal\'s renowned culinary scene and vibrant nightlife',
          icon: '🍽️',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          highlights: ['Fine Dining', 'Local Bistros', 'Craft Breweries', 'Nightlife Scene']
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
