import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { LanguageService } from './language.service';

export interface ContentData {
  en: any;
  fr: any;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentData$: Observable<ContentData>;
  private currentContent$ = new BehaviorSubject<any>({});

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    this.contentData$ = this.http.get<ContentData>('./assets/content.json').pipe(
      shareReplay(1),
      catchError((error) => {
        console.error('Error loading content:', error);
        // Return default content if loading fails
        return new Observable<ContentData>(observer => {
          observer.next(this.getDefaultContent());
        });
      })
    );

    // Update content when language changes
    combineLatest([
      this.contentData$,
      this.languageService.currentLanguage$
    ]).pipe(
      map(([content, language]) => content[language as keyof ContentData] || content.en)
    ).subscribe(content => {
      this.currentContent$.next(content);
    });
  }

  private getDefaultContent(): ContentData {
    return {
      en: {
        nav: {
          home: "Home",
          apartments: "Apartments",
          amenities: "Amenities",
          lifestyle: "Lifestyle",
          students: "Students",
          furnished: "Furnished Suites",
          unfurnished: "Unfurnished Suites",
          gallery: "Gallery",
          contact: "Contact"
        },
        buttons: {
          exploreApartments: "Explore Apartments",
          bookTour: "Book a Tour",
          submit: "Submit",
          language: "Français"
        },
        footer: {
          address: "2170 Lincoln Avenue, Montreal, QC",
          phone: "438-508-1566",
          email: "le2170lincoln@gmail.com"
        }
      },
      fr: {
        nav: {
          home: "Accueil",
          apartments: "Appartements",
          amenities: "Commodités",
          lifestyle: "Style de vie",
          students: "Étudiants",
          furnished: "Suites meublées",
          unfurnished: "Suites non meublées",
          gallery: "Galerie",
          contact: "Contact"
        },
        buttons: {
          exploreApartments: "Explorer les appartements",
          bookTour: "Réserver une visite",
          submit: "Soumettre",
          language: "English"
        },
        footer: {
          address: "2170 Avenue Lincoln, Montréal, QC",
          phone: "438-508-1566",
          email: "le2170lincoln@gmail.com"
        }
      }
    };
  }

  getContent(): Observable<any> {
    return this.currentContent$.asObservable();
  }

  getContentSync(): any {
    return this.currentContent$.value;
  }
}
