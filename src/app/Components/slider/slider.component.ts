import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {


  images: { src: string, alt: string }[] = [
    { src: 'https://images.dubizzle.com.eg/thumbnails/83048137-800x600.web', alt: 'Product Image 1' },
    { src: 'https://images.dubizzle.com.eg/thumbnails/83048137-800x600.web', alt: 'Product Image 2' },
    { src: 'https://images.dubizzle.com.eg/thumbnails/83048137-800x600.web', alt: 'Product Image 3' },
  ];

}
