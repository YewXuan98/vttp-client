import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutes } from './home.routes';
import { BannerComponent } from './Banner/banner.component';
import { ImageSliderComponent } from './Image-Slider/image-slider.component';
import { NewlyAddedComponent } from './Newly-Added/newly-added.component';
import { TopSellingComponent } from './Top-Selling/top-selling.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    // RouterModule.forChild(HomeRoutes),
    NgbModule,
    NewlyAddedComponent,
    TopSellingComponent,
    ImageSliderComponent,
    BannerComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
