import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FoodOptionsComponent } from '../food-options/food-options.component';
import { FooterComponent } from '../footer/footer.component';

interface Restaurant {
  name: string;
  rating: number;
  reviewCount: string;
  priceForTwo: string;
  cuisineType: string;
  location: string;
  isOpen: boolean;
  openingTime: string;
}

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent, FoodOptionsComponent],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.css'
})

export class RestaurantPageComponent {
  restaurant: Restaurant = {
    name: 'Hotel Excellency Bar & Restaurant',
    rating: 4.1,
    reviewCount: '4K+',
    priceForTwo: '₹800 for two',
    cuisineType: 'Continental, North Indian',
    location: 'Jhunjhunwala Garden, 74 C/9, Unit-2, Ashok N...',
    isOpen: false,
    openingTime: 'OPENS AT 11AM'
  };
  offers = [
    {
      title:   
 '10% Off',
      description: 'on total bill',
      payment: 'Walk-in payment offers',
      paymentDescription: 'Pay restaurant bill via Swiggy app to avail the offer'
    },
    {
      title: 'Flat 20% Off on Total Bill',
      description: 'on total bill',
      payment: 'Walk-in payment offers',
      paymentDescription: 'Pay restaurant bill via Swiggy app to avail the offer',
      guest: '₹10/guest'
    },
    {
      title: 'CASHBACK 10%*',
      description: '10% cashback Above ₹100',
      payment: 'Additional Offers',
      paymentDescription: 'Payment offers are auto-applied over coupon'
    },
    {
      title: 'FLAT 15% Off',
      description: 'Use HDFC/FINA',
      payment: 'Additional Offers',
      paymentDescription: 'Payment offers are auto-applied over coupon'
    },
    {
      title: 'FLAT',
      description: 'Use HDFC/FINA',
      payment: 'Additional Offers',
      paymentDescription: 'Payment offers are auto-applied over coupon'
    }
  ];

  ngOnInit(): void {
  }
}
