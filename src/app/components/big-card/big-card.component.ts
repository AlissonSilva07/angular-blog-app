import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() bigCardTitle: string = '';
  @Input() bigCardSubtitle: string = '';
  @Input() bigCardImage: string = '';
  @Input() bigCardAuthor: string = '';
  @Input() bigCardDate: string = '';
}
