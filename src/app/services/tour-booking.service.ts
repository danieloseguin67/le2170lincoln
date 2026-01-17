import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TourBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TourBookingService {
  private isFormVisible$ = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  getFormVisibility() {
    return this.isFormVisible$.asObservable();
  }

  showBookingForm() {
    this.isFormVisible$.next(true);
  }

  hideBookingForm() {
    this.isFormVisible$.next(false);
  }

  submitBooking(booking: TourBooking): Promise<boolean> {
    // In a real application, this would send data to a server
    console.log('Tour booking submitted:', booking);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Store in localStorage for now
        const bookings = JSON.parse(localStorage.getItem('tourBookings') || '[]');
        bookings.push({...booking, id: Date.now(), timestamp: new Date().toISOString()});
        localStorage.setItem('tourBookings', JSON.stringify(bookings));
        
        resolve(true);
      }, 1000);
    });
  }
}
