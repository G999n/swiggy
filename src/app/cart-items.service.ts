import { Injectable } from '@angular/core';

export interface foodItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  private cartItems: foodItem[] = []; // Array to store cart items
  cartSubtotal: number = 0; // Subtotal of items in the cart

  constructor() {}

  // Get all cart items
  getCartItems(): foodItem[] {
    return this.cartItems;
  }

  // Add an item to the cart
  addToCart(item: foodItem): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Update quantity if item exists
    } else {
      this.cartItems.push(item); // Add new item
    }
    this.calculateSubtotal(); // Recalculate subtotal when item is added
  }

  // Decrease quantity of an item by 1, or remove it if quantity becomes 0
  deleteFromCart(item: foodItem): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1; // Decrease quantity by 1 if greater than 1
      } else {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.name !== item.name); // Remove item if quantity is 1
      }
    }
    this.calculateSubtotal(); // Recalculate subtotal when item is updated or removed
  }

  // Calculate the subtotal of cart items
  calculateSubtotal(): void {
    this.cartSubtotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Get the subtotal
  getCartSubtotal(): number {
    return this.cartSubtotal;
  }
}
