import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Donut Shop';

  constructor(private cartService: CartService) {}

  getCartStatus() {
    return this.cartService.getCart().length;
  }
}
