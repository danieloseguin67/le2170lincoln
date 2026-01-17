import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ApartmentDetailComponent } from './components/apartment-detail/apartment-detail.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { StudentsComponent } from './components/students/students.component';
import { FurnishedSuitesComponent } from './components/furnished-suites/furnished-suites.component';
import { UnfurnishedSuitesComponent } from './components/unfurnished-suites/unfurnished-suites.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:id', component: ApartmentDetailComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'furnished-suites', component: FurnishedSuitesComponent },
  { path: 'unfurnished-suites', component: UnfurnishedSuitesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
