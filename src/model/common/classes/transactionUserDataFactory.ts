import { UserRole } from '../../../types/types';
import { LocalUserData, TransactionUserData } from '../userDataTypes';

/**
 * an observer
 * looks on the current user data
 * then upload if the user logsIn/save a new location
 */
export class TransactionUserDataFactory implements TransactionUserData {
  public role: UserRole;
  public id: string;
  public fullName: string;
  public email: string;
  public contactNumber: string;
  public address: string;

  constructor(data: LocalUserData) {
    this.role = data.role;
    this.id = data.id;
    this.fullName = data.fullName;
    this.email = data.email;
    this.contactNumber = data.contactNumber;
    this.address = data.address;
  }
}
