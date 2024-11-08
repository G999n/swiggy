import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent {
  constructor(public router: Router) {}

  goToRestaurantPage () {
    this.router.navigate(['/restaurant-page'])
  }
}



