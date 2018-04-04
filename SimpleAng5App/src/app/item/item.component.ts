import { Component, Input } from '@angular/core';

interface Item {
  title: string,
  description: string
}

@Component({
  selector: 'app-item',
  template: `
    <div>
      {{item.title}}
      {{item.description}}
    </div>
  `,
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item: Item[];
}
