import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-sub-cate-card',
  standalone: true,
  imports: [],
  templateUrl: './sub-cate-card.component.html',
  styleUrl: './sub-cate-card.component.scss'
})
export class SubCateCardComponent {
  @Input() data = ''

}
