import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ItemService {

  private items: Items[] = []

  constructor(
    private logger: LoggerService
  ) { }

  getItems() {
    let mockItems = ['hello']

    this.items.push(...mockItems)
    this.logger.log(`Getting ${mockItems.length} items`)

    return this.items
  }

}
