import { Component, OnInit } from '@angular/core';
import { Donut, Result } from 'src/app/interfaces/donut';
import { DonutApiService } from 'src/app/services/donut-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  donutList: Result[] = [];

  constructor(private donutApiService: DonutApiService) {}

  ngOnInit(): void {
    this.donutApiService.getDonutList().subscribe({
      next: (response) => (this.donutList = response.results),
      error: (error) => console.log(error),
    });
  }
}
