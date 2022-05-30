import { ItemType } from '../types/types';

export class ClassesStore {
  // array of all object acts as a cache
  public items: ItemType[] = [];

  constructor() {
    let itemList: ItemType = {
      imageID: [],
      description: 'Some description',
      details: 'some details here',
      rating: 0,
      location: 'Iloilo',
      ownerID: '1',
      id: '1'
    };
    this.items.push(itemList);
  }
}
