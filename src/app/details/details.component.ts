import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonutDetail } from '../interfaces/donut';
import { CartService } from '../services/cart.service';
import { DonutApiService } from '../services/donut-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detail: DonutDetail | undefined;

  constructor(
    private donutApiService: DonutApiService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getDetails(id);
    });
  }

  getDetails(id: number) {
    this.donutApiService.getDonutDetail(id).subscribe({
      next: (response) => (this.detail = response),
      error: (err) => console.log(err),
    });
  }

  addToCart(item: DonutDetail) {
    this.cartService.addItem(item);
    this.router.navigate(['cart']);
  }
}
