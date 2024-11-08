import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';

export const routes: Routes = [
    { path: 'restaurant-page', component: RestaurantPageComponent }, // standalone route for restaurant-page
];

