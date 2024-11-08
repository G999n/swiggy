import { Component, OnInit } from '@angular/core';
import { CartItemsService, foodItem } from '../cart-items.service'; // Import the service
import { CommonModule } from '@angular/common';

declare var paypal: any; // Declare PayPal variable for TypeScript

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItems: foodItem[] = [];
  cartVisible: boolean = false;

  constructor(private cartService: CartItemsService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  toggleCartDropdown() {
    this.cartVisible = !this.cartVisible;
  }

  increaseQuantity(item: foodItem) {
    this.cartService.addToCart({ ...item, quantity: 1 });
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(item: foodItem) {
    this.cartService.deleteFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  get cartSubtotal(): number {
    return this.cartService.getCartSubtotal();
  }

  // Function to open PayPal checkout when clicking "Checkout"
  openPayPalCheckout() {
    const amount = this.cartService.getCartSubtotal();  // Get subtotal

    // Open PayPal checkout page
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount.toFixed(2),  // Use your total price here
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert("Payment successful! " + details.payer.name.given_name);
          console.log(details);
        });
      },
      onError: (err: any) => {
        console.error('PayPal error:', err);
        alert('Payment failed. Please try again.');
      }
    }).render('#paypal-button-container'); // This container will hold the button
  }
}
