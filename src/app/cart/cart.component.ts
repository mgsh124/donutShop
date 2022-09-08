import { Component, OnInit } from '@angular/core';
import { DonutDetail } from '../interfaces/donut';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts: DonutDetail[] = [];
  price: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.carts = this.cartService.getCart();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.getShoppingCart();
  }

  getTotalCalories() {
    return this.carts.reduce((prev, curr) => {
      return prev + curr.calories;
    }, 0);
  }

  getTotalPrice() {
    return this.carts.length * this.price;
  }
}
