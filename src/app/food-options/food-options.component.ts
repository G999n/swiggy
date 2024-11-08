import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsService, foodItem } from '../cart-items.service';

@Component({
  selector: 'app-food-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-options.component.html',
  styleUrl: './food-options.component.css'
})
export class FoodOptionsComponent {
  foodItems: foodItem[] = [
    { name: 'Biryani', image: 'assets/biryani.png', price: 150, quantity: 1 },
    { name: 'Rajma Chawal', image: 'assets/north_indian.png', price: 120, quantity: 1 },
    { name: 'Pizza', image: 'assets/pizza.png', price: 200, quantity: 1 },
    { name: 'Burger', image: 'assets/burger.png', price: 100, quantity: 1 },
    { name: 'Noodles', image: 'assets/chinese.png', price: 90, quantity: 1 }
  ];

  constructor(private cartService: CartItemsService) {}

  ngOnInit(): void {}

  addToCart(food: foodItem): void {
    this.cartService.addToCart(food); 
  }
}
