import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BookTourFormComponent } from './shared/book-tour-form/book-tour-form.component';
import { ContentService } from './services/content.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BookTourFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'le2170lincoln-website';

  constructor(
    private contentService: ContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    // Initialize content service to start loading JSON
    this.contentService.getContent().subscribe();
  }
}
