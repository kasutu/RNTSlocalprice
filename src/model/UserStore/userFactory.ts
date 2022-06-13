import { UserRole } from '../../types/types';

export class UserBuilder {
  constructor(
    public role: UserRole,
    public email: string,
    public fullName: string,
    public id: string,
    public contactNumber: string,
    public brgy: string,
    public town: string,
    public city: string,
    public zipCode: string | number,
    public geoPointId: string,
    public transactionIds: string[],
    public convoIds: string[],
    public itemIds: string[]
  ) {}
}
