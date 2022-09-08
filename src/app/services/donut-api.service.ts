import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Donut, DonutDetail } from '../interfaces/donut';

@Injectable({
  providedIn: 'root',
})
export class DonutApiService {
  constructor(private http: HttpClient) {}

  getDonutList() {
    return this.http.get<Donut>(environment.donutApiEndpoint + '/donuts.json');
  }

  getDonutDetail(id: number) {
    return this.http.get<DonutDetail>(
      environment.donutApiEndpoint + '/donuts/' + id + '.json'
    );
  }
}
