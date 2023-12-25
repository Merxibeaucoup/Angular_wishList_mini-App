import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    {
      name: 'john',
      status: 'active',
    },
    {
      name: 'prince',
      status: 'inactive',
    },
    {
      name: 'tom',
      status: 'active',
    },
    {
      name: 'madden',
      status: 'active',
    },
  ];
  constructor() {}

  AddNewUser(name: string, status: string) {
    this.users.push({ name, status });
  }
}
