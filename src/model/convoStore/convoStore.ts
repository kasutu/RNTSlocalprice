// MobX implementation

import { makeAutoObservable } from 'mobx';
import { ConversationOwnersType, MessageType } from '../../types/types';
import { getAllMessagesHandler, sendNewMessageHandler } from '../common/utils';

// make this generic soon
// 'export' is added for test purposes
export class ConvoStore {
  /**
   * atleast 1 property to hold data
   * you want to broadcast all over any screen
   */
  public data: MessageType[] = [];
  public currentConvoId: string = '';
  public msg: string = '';
  public currentUser: string = '';
  public otherUser: string = '';
  public badge: string = '';
  public owners: ConversationOwnersType = {
    buyerName: '',
    sellerName: ''
  };

  constructor() {
    // let MobX observe this class and use this to any screen
    // important
    makeAutoObservable(this);
  }

  // add methods here if needed

  /**
   * @function empty() empties the array first before rendering
   */
  public empty(): void {
    this.data = [];
  }

  public send() {
    sendNewMessageHandler(this.owners, this.currentUser, this.msg);
  }

  public init() {
    getAllMessagesHandler();
  }
}

// make a store instance and export it
// change name base on the name of the class above
const convoStore = new ConvoStore();

/**
 * @exports geoStore
 * import this to any screen and use a dot notation
 * geoStore.dacs // exposes the docs contents
 */
export default convoStore;
