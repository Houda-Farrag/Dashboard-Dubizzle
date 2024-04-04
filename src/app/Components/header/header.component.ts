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

  openAvatar: boolean
  openHeader: boolean
  constructor() {
    this.openAvatar = true
    this.openHeader = true
  }
  isopenAvatar() {
    this.openAvatar = !this.openAvatar
  }
  isopenHeader() {
    this.openHeader = !this.openHeader
  }
}
