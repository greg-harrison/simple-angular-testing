import { Component, OnChanges, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

interface Item {
  title: string,
  description: string
}

// <app-item[item]="item" > </app-item>
@Component({
  selector: 'app-item-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let item of items">
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./item-list.component.css'],
  providers: [ItemService]
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private service: ItemService) { }

  ngOnInit() {
    this.items = this.service.getItems()
  }

}
