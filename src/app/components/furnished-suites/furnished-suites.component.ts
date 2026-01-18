import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface FurnishedFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  inclusions: string[];
}

interface FurnishedCategory {
  id: string;
  title: string;
  description: string;
  features: FurnishedFeature[];
}

@Component({
  selector: 'app-furnished-suites',
  imports: [CommonModule],
  templateUrl: './furnished-suites.component.html',
  styleUrl: './furnished-suites.component.scss'
})
export class FurnishedSuitesComponent implements OnInit {
  content$: Observable<any>;

  furnishedCategories: FurnishedCategory[] = [
    {
      id: 'furniture-essentials',
      title: 'Premium Furnishings',
      description: 'Every suite comes fully furnished with high-quality, modern furniture',
      features: [
        {
          id: 'living-room',
          title: 'Living Room Essentials',
          description: 'Comfortable and stylish living spaces ready for relaxation and entertainment',
          icon: '🛋️',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          inclusions: ['Sectional Sofa', 'Coffee Table', 'TV Stand & Smart TV', 'Area Rugs']
        },
        {
          id: 'bedroom-furniture',
          title: 'Bedroom Comfort',
          description: 'Restful bedrooms with premium mattresses and stylish furniture',
          icon: '🛏️',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          inclusions: ['Queen/King Bed', 'Premium Mattress', 'Bedside Tables', 'Dresser & Mirror']
        }
      ]
    },
    {
      id: 'kitchen-appliances',
      title: 'Fully Equipped Kitchens',
      description: 'Complete with modern appliances and essential kitchenware',
      features: [
        {
          id: 'appliances',
          title: 'Modern Appliances',
          description: 'Energy-efficient, stainless steel appliances for all your culinary needs',
          icon: '🍽️',
          image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          inclusions: ['Refrigerator/Freezer', 'Dishwasher', 'Microwave', 'Coffee Maker']
        },
        {
          id: 'kitchenware',
          title: 'Complete Kitchenware',
          description: 'Everything needed for cooking and dining, from day one',
          icon: '🍴',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          inclusions: ['Cookware Set', 'Dinnerware', 'Cutlery', 'Small Appliances']
        }
      ]
    },
    {
      id: 'convenience-features',
      title: 'Move-In Ready Convenience',
      description: 'Every detail taken care of for immediate comfortable living',
      features: [
        {
          id: 'linens-essentials',
          title: 'Linens & Essentials',
          description: 'Premium linens and household essentials provided',
          icon: '🧺',
          image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
          inclusions: ['Bed Linens', 'Towels', 'Pillows', 'Window Treatments']
        },
        {
          id: 'flexible-terms',
          title: 'Flexible Lease Options',
          description: 'Short-term and long-term options available to fit your needs',
          icon: '📝',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          inclusions: ['3-12 Month Terms', 'Corporate Housing', 'Student Packages', 'Relocation Services']
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
