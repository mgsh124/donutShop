import { Injectable } from '@angular/core';
import { DonutDetail } from '../interfaces/donut';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: DonutDetail[] = [];

  constructor() {}

  getCart() {
    return this.carts;
  }

  addItem(item: DonutDetail) {
    this.carts.push(item);
  }

  removeItem(id: number) {
    const removeIdx = this.carts.findIndex((item) => item.id === id);
    if (removeIdx > -1) {
      this.carts.splice(removeIdx, 1);
    }
  }
}
