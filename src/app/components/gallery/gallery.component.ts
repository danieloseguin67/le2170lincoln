import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  images: {
    image1: {
      src: string;
      alt: string;
      placeholder?: boolean;
    };
    image2: {
      src: string;
      alt: string;
      placeholder?: boolean;
    };
  };
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit, OnDestroy {
  content$: Observable<any>;
  currentSlide = 0;
  autoSlideInterval: any;
  
  images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Modern Studio Apartment',
      title: 'Studio Deluxe',
      description: 'Spacious and modern studio with premium finishes'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'One Bedroom Living Area',
      title: 'One Bedroom Premium',
      description: 'Elegant living space with natural light'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      alt: 'Two Bedroom Executive',
      title: 'Executive Suite',
      description: 'Luxurious two-bedroom with city views'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
      alt: 'Penthouse Living',
      title: 'Penthouse Suite',
      description: 'Premium penthouse with panoramic views'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Modern Kitchen',
      title: 'Gourmet Kitchen',
      description: 'State-of-the-art kitchen with premium appliances'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Building Amenities',
      title: 'Premium Amenities',
      description: 'World-class facilities and community spaces'
    }
  ];

  categories: GalleryCategory[] = [
    {
      id: 'amenities',
      title: 'Amenities',
      description: 'Discover our world-class amenities designed to elevate your living experience. From fitness centers to rooftop terraces, every detail is crafted for your comfort and convenience.',
      images: {
        image1: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Amenities+Image+1',
          alt: 'Amenities Image 1',
          placeholder: true
        },
        image2: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Amenities+Image+2',
          alt: 'Amenities Image 2',
          placeholder: true
        }
      }
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle',
      description: 'Experience the vibrant lifestyle at LE 2170 Lincoln. Our community offers the perfect balance of urban sophistication and peaceful retreat, right in the heart of the city.',
      images: {
        image1: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Lifestyle+Image+1',
          alt: 'Lifestyle Image 1',
          placeholder: true
        },
        image2: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Lifestyle+Image+2',
          alt: 'Lifestyle Image 2',
          placeholder: true
        }
      }
    },
    {
      id: 'students',
      title: 'Students',
      description: 'Designed with students in mind, our apartments offer the perfect environment for academic success. Close to universities with study spaces, high-speed internet, and a supportive community.',
      images: {
        image1: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Student+Living+Image+1',
          alt: 'Student Living Image 1',
          placeholder: true
        },
        image2: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Student+Living+Image+2',
          alt: 'Student Living Image 2',
          placeholder: true
        }
      }
    },
    {
      id: 'furnished-suites',
      title: 'Furnished Suites',
      description: 'Move in ready! Our fully furnished suites come equipped with premium furniture, appliances, and everything you need for comfortable living from day one.',
      images: {
        image1: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Furnished+Suite+1',
          alt: 'Furnished Suite Image 1',
          placeholder: true
        },
        image2: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Furnished+Suite+2',
          alt: 'Furnished Suite Image 2',
          placeholder: true
        }
      }
    },
    {
      id: 'unfurnished-suites',
      title: 'Unfurnished Suites',
      description: 'Create your own personalized space in our unfurnished suites. These blank canvases offer flexibility to design your perfect home with your own style and furniture.',
      images: {
        image1: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Unfurnished+Suite+1',
          alt: 'Unfurnished Suite Image 1',
          placeholder: true
        },
        image2: {
          src: 'https://via.placeholder.com/600x400/e9ecef/6c757d?text=Unfurnished+Suite+2',
          alt: 'Unfurnished Suite Image 2',
          placeholder: true
        }
      }
    }
  ];

  constructor(
    private contentService: ContentService,
    private tourBookingService: TourBookingService
  ) {
    this.content$ = this.contentService.getContent();
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  onMouseEnter(): void {
    this.stopAutoSlide();
  }

  onMouseLeave(): void {
    this.startAutoSlide();
  }

  bookTour(): void {
    this.tourBookingService.showBookingForm();
  }
}
