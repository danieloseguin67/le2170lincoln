import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  content$: Observable<any>;
  currentYear: number;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.getContent();
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }
}
