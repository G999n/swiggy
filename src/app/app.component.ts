import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodOptionsComponent } from './food-options/food-options.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FooterComponent, CitiesComponent, NavbarComponent, FoodOptionsComponent, RestaurantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy';
  constructor(public router: Router) {}
  isFullPageRoute(): boolean {
    const fullPageRoutes = ['/restaurant-page'];
    return fullPageRoutes.includes(this.router.url);
  }
}
