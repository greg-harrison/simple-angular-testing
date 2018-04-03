import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {
  items: Items[]

  constructor(private service: ItemService) { }

  ngOnInit() {
    this.items = this.service.getItems()
  }

}
