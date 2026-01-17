import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      this.currentLanguageSubject.next(savedLanguage);
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: 'en' | 'fr'): void {
    this.currentLanguageSubject.next(language);
    localStorage.setItem('language', language);
  }

  toggleLanguage(): void {
    const current = this.getCurrentLanguage();
    const newLanguage = current === 'en' ? 'fr' : 'en';
    this.setLanguage(newLanguage as 'en' | 'fr');
  }
}
