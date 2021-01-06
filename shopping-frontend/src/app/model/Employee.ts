import {Account} from './Account';

export class Employee {
  id: number;
  isDeleted = 0;
  description: string;
  code: string;
  name: string;
  birthday: string;
  email: string;
  gender: number;
  cardId: string;
  account: Account;
}
