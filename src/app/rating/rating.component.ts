import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input('isSelected')
  isSelected: boolean = false;

  @Output()
  rated = new EventEmitter();

  onClick() {
    console.log('rating clicked');
    this.isSelected = !this.isSelected;
    this.rated.emit();
  }

}
