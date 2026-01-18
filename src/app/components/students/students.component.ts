import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

interface StudentFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
}

interface StudentCategory {
  id: string;
  title: string;
  description: string;
  features: StudentFeature[];
}

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  content$: Observable<any>;

  studentCategories: StudentCategory[] = [
    {
      id: 'academic-support',
      title: 'Academic Excellence',
      description: 'Everything you need to succeed in your studies',
      features: [
        {
          id: 'study-spaces',
          title: 'Dedicated Study Areas',
          description: 'Quiet, well-lit spaces designed for focused studying and group work',
          icon: '📚',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          benefits: ['24/7 Access', 'High-Speed WiFi', 'Printing Services', 'Group Study Rooms']
        },
        {
          id: 'tech-resources',
          title: 'Technology Resources',
          description: 'High-speed internet and tech support to keep you connected',
          icon: '💻',
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
          benefits: ['Fiber Internet', 'IT Support', 'Computer Lab', 'Tech Workshops']
        }
      ]
    },
    {
      id: 'university-access',
      title: 'University Proximity',
      description: 'Close to Montreal\'s top educational institutions',
      features: [
        {
          id: 'transit-universities',
          title: 'Easy Campus Access',
          description: 'Convenient transportation to McGill, Concordia, UQAM, and other institutions',
          icon: '🏫',
          image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80',
          benefits: ['Metro Connections', 'Bus Routes', 'Walking Distance', 'Bike Paths']
        },
        {
          id: 'student-community',
          title: 'Student Community',
          description: 'Connect with fellow students and build lasting friendships',
          icon: '👥',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          benefits: ['Student Events', 'Study Groups', 'Social Activities', 'Peer Support']
        }
      ]
    },
    {
      id: 'student-lifestyle',
      title: 'Student Lifestyle',
      description: 'Balanced living for academic and personal growth',
      features: [
        {
          id: 'budget-friendly',
          title: 'Affordable Living',
          description: 'Student-friendly pricing and flexible lease options',
          icon: '💰',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          benefits: ['Student Discounts', 'Flexible Leases', 'Utilities Included', 'Payment Plans']
        },
        {
          id: 'wellness-support',
          title: 'Wellness & Recreation',
          description: 'Maintain a healthy balance between studies and personal well-being',
          icon: '🏋️‍♂️',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          benefits: ['Fitness Center', 'Wellness Programs', 'Mental Health Resources', 'Recreation Areas']
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
