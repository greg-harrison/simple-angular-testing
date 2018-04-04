import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ItemService {
  constructor(
    private logger: LoggerService) { }

  private items: Item[] = [];

  getItems() {
    let mockItems = [
      {
        title: 'hello',
        description: 'thing1'
      },
      {
        title: 'test',
        description: 'thing2'
      },
      {
        title: 'world',
        description: 'thing3'
      },
      {
        title: 'hola',
        description: 'thing4'
      }]

    this.items.push(...mockItems)
    this.logger.log(`Getting ${mockItems.length} items`)


    console.log(this.items)

    return this.items
  }

}
