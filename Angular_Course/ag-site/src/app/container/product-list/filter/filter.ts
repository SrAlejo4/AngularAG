import { Component, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  selectedFilterRaddioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRaddioButton: string = 'all';

  onSelectedFilterRaddioButtonChanged(){
    this.selectedFilterRaddioButtonChanged.emit()
  }
}
