import { Component, OnInit } from '@angular/core';
import { config } from '../../../configurations/local';
import { Carousel } from '../../../configurations/models';
import { NgbCarousel, NgbCarouselConfig, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
  standalone: true,
  imports: [NgStyle, RouterLink, NgbCarousel, CommonModule, NgbSlide]
})

export class ImageSliderComponent implements OnInit{
  
  carousel !: Array<Carousel>;
  
  constructor(config: NgbCarouselConfig){
    // Set interval between slides (milliseconds)
    
    config.interval = 5000; // Adjust as needed
  
    // Enable or disable wrapping of slides
    
    config.wrap = true; // Set to true to wrap from the last slide to the first
  
    // Enable or disable keyboard navigation
    
    config.keyboard = true; // Set to true to enable keyboard navigation
  }


   
  ngOnInit(): void {
    this.carousel = config.carousel
  }

}
 
