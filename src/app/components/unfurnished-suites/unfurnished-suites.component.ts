import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface UnfurnishedFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  advantages: string[];
}

interface UnfurnishedCategory {
  id: string;
  title: string;
  description: string;
  features: UnfurnishedFeature[];
}

@Component({
  selector: 'app-unfurnished-suites',
  imports: [CommonModule],
  templateUrl: './unfurnished-suites.component.html',
  styleUrl: './unfurnished-suites.component.scss'
})
export class UnfurnishedSuitesComponent implements OnInit {
  content$: Observable<any>;

  unfurnishedCategories: UnfurnishedCategory[] = [
    {
      id: 'customization-freedom',
      title: 'Design Freedom',
      description: 'Create your perfect home with unlimited customization possibilities',
      features: [
        {
          id: 'personal-style',
          title: 'Express Your Style',
          description: 'Bring your vision to life with complete freedom to choose your furniture and decor',
          icon: '🎨',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          advantages: ['Unlimited Design Choices', 'Personal Style Expression', 'Flexible Layouts', 'Custom Color Schemes']
        },
        {
          id: 'space-optimization',
          title: 'Optimize Your Space',
          description: 'Maximize functionality by choosing furniture that perfectly fits your lifestyle',
          icon: '📏',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          advantages: ['Custom Storage Solutions', 'Multi-functional Furniture', 'Space Efficiency', 'Personalized Layouts']
        }
      ]
    },
    {
      id: 'cost-benefits',
      title: 'Cost Advantages',
      description: 'Enjoy lower rent and use your existing furniture investments',
      features: [
        {
          id: 'lower-rent',
          title: 'Reduced Monthly Costs',
          description: 'Save money with lower monthly rent compared to furnished units',
          icon: '💰',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          advantages: ['Lower Monthly Rent', 'No Furniture Premium', 'Budget Flexibility', 'Cost Control']
        },
        {
          id: 'existing-furniture',
          title: 'Use Your Own Furniture',
          description: 'Bring your favorite pieces and sentimental items to make it truly home',
          icon: '🛋️',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          advantages: ['Familiar Comfort', 'Sentimental Value', 'Quality Investment', 'Long-term Savings']
        }
      ]
    },
    {
      id: 'premium-features',
      title: 'Premium Base Features',
      description: 'Start with luxury built-in features and add your personal touch',
      features: [
        {
          id: 'built-in-appliances',
          title: 'Modern Built-Ins',
          description: 'Premium appliances and fixtures are included for your convenience',
          icon: '🍽️',
          image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          advantages: ['Stainless Steel Appliances', 'In-unit Laundry', 'Premium Fixtures', 'Modern Kitchen']
        },
        {
          id: 'long-term-stability',
          title: 'Long-term Living',
          description: 'Perfect for residents planning to stay and truly settle in',
          icon: '🏠',
          image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
          advantages: ['12+ Month Leases', 'Renewal Incentives', 'Community Building', 'Stable Rent']
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
