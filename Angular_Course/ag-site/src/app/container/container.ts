import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search } from './search/search'
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-container',
  imports: [CommonModule, Search, ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  listOfStrings: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];
}

