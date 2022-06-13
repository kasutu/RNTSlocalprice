import { UserRole } from '../../../types/types';
import { LocalUserData } from '../userDataTypes';

/**
 * constructs data to be used locally
 * @formatter
 */
export class LocalUserDataFactory implements LocalUserData {
  public role: UserRole;
  public id: string;
  public fullName: string;
  public email: string;
  public contactNumber: string;
  public brgy: string;
  public town: string;
  public city: string;
  public zipCode: string;
  public address: string;
  public geopointId: string;
  public transactionIds: string[];
  public convoIds: string[];
  public itemIds: string[];
  public isLoggedIn: boolean;

  constructor(data: LocalUserData) {
    const {
      address,
      brgy,
      city,
      contactNumber,
      convoIds,
      email,
      fullName,
      geopointId,
      id,
      isLoggedIn,
      itemIds,
      role,
      town,
      transactionIds,
      zipCode
    } = data;

    this.role = role;
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.contactNumber = contactNumber;
    this.brgy = brgy;
    this.town = town;
    this.city = city;
    this.zipCode = zipCode;
    this.address = address;
    this.geopointId = geopointId;
    this.transactionIds = transactionIds;
    this.convoIds = convoIds;
    this.itemIds = itemIds;
    this.isLoggedIn = isLoggedIn;
  }
}
