import { UserRole } from '../../types/types';

/**
 *    address,
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
 */
export interface LocalUserData {
  role: UserRole;
  id: string;
  fullName: string;
  email: string;
  contactNumber: string;
  brgy: string;
  town: string;
  city: string;
  zipCode: string;
  address: string;
  geopointId: string;
  transactionIds: string[];
  convoIds: string[];
  itemIds: string[];
  isLoggedIn: boolean;
}

/**
 * salpak ang user and seller sa transaction
 *  bind lang ang convoID sa transaction
 */
export interface TransactionUserData {
  role: UserRole;
  id: string;
  fullName: string;
  email: string;
  contactNumber: string;
  address: string;
}

export interface UserPersistData {
  persist: LocalUserData | null;

  /**
   * loads
   * check local first
   * else check server
   * else alert 'user not found'
   */
  fetch(uid: string): void;
}
