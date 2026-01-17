import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  content$: Observable<any>;

  constructor(
    private languageService: LanguageService,
    private contentService: ContentService
  ) {
    this.content$ = this.contentService.getContent();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}
