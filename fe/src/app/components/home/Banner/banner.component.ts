import { Component } from '@angular/core';
import { config } from '../../../configurations/local';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  standalone: true,
  imports: [NgIf]
})
export class BannerComponent {
  bannerUrl: string | undefined;

  constructor() {
  }

  ngOnInit() {
    this.bannerUrl = config.bannerUrl;
  }
}

