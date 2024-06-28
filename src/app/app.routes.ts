import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'favorites', component: FavoriteListComponent },
  { path: 'job/:id', component: JobDetailsComponent },
];
