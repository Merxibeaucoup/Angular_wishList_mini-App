import { Component } from '@angular/core';
import { WishItem } from '../../../models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  items: WishItem[] = [
    new WishItem('Item 1'),
    new WishItem('Get coffee', false),
    new WishItem('Find Nemo', true),
  ];

  newWishText: string = '';
  listFilter: string = '0';

  visibleItems: WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChange(value: string) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter((item) => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter((item) => item.isComplete);
    }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
