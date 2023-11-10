import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OfferpageComponent } from './offerpage/offerpage.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: 'jobs', component: HomepageComponent },
];
