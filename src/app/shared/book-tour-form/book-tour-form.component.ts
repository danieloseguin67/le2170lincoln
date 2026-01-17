import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { TourBookingService } from '../../services/tour-booking.service';

@Component({
  selector: 'app-book-tour-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-tour-form.component.html',
  styleUrl: './book-tour-form.component.scss'
})
export class BookTourFormComponent implements OnInit, OnDestroy {
  content$: Observable<any>;
  isVisible$: Observable<boolean>;
  bookingForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  minDate: string;
  
  private subscription: Subscription = new Subscription();

  constructor(
    private contentService: ContentService,
    private tourBookingService: TourBookingService,
    private fb: FormBuilder
  ) {
    this.content$ = this.contentService.getContent();
    this.isVisible$ = this.tourBookingService.getFormVisibility();
    
    // Set minimum date to today
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.bookingForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onOverlayClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeForm();
    }
  }

  closeForm(): void {
    this.tourBookingService.hideBookingForm();
    this.showSuccessMessage = false;
    this.bookingForm.reset();
  }

  async onSubmit(): Promise<void> {
    if (this.bookingForm.valid) {
      this.isSubmitting = true;
      
      try {
        const success = await this.tourBookingService.submitBooking(this.bookingForm.value);
        if (success) {
          this.showSuccessMessage = true;
          this.bookingForm.reset();
          
          // Auto-close after 3 seconds
          setTimeout(() => {
            this.closeForm();
          }, 3000);
        }
      } catch (error) {
        console.error('Error submitting booking:', error);
        // Handle error (show error message)
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.bookingForm.controls).forEach(key => {
        this.bookingForm.get(key)?.markAsTouched();
      });
    }
  }
}
