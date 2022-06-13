import { makeAutoObservable, runInAction } from 'mobx';
import { uuid } from '../../api/uuid/index.uuid';
import { documentAddHandler, documentUpdateHandler } from '../common/utils';
import persistedUserData from '../UserStore/persistedUserData';
import userStore from '../UserStore/UserStore';

class ServerItemFactoryStore {
  public id: string = uuid.v4();
  public description: string = '';
  public uri: string = '';
  public name: string = '';
  public price: number = 0;
  public location: string = '';
  public details: string = '';
  public ownerID: string = '';
  public locationName: string = '';
  public isPacked: boolean = false;
  public imageIDs: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public clear() {
    this.id = '';
    this.description = '';
    this.uri = '';
    this.name = '';
    this.price = 0;
    this.location = '';
    this.details = '';
    this.ownerID = '';
    this.locationName = '';
    this.isPacked = false;
    this.imageIDs = [];
  }

  public addToServer() {
    let tempData: ServerItem = new ServerItem(
      uuid.v4(),
      this.description,
      this.uri,
      this.name,
      this.price,
      this.location,
      this.details,
      persistedUserData.data.id,
      persistedUserData.data.city,
      this.isPacked,
      this.imageIDs
    );

    runInAction(() => {
      userStore.itemIds.push(tempData.id);
    });

    documentAddHandler('items', tempData);
  }
}

// make a store instance and export it
const serverItemFactoryStore = new ServerItemFactoryStore();
export default serverItemFactoryStore;

class ServerItem {
  constructor(
    public id: string,
    public description: string = '',
    public uri: string = '',
    public name: string = '',
    public price = 0,
    public location: string = '',
    public details: string = '',
    public ownerID: string = '',
    public locationName: string = '',
    public isPacked: boolean = false,
    public imageIDs: string[] = []
  ) {}
}
