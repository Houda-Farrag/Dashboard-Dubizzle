import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

  items = ["users", "category", "sub-category", "properties", "products"]

  open1: boolean = true
  constructor() {
    this.open1 = true
  }

}
