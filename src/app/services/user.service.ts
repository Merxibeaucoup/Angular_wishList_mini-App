import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // generate users array with name, job , gender , country , age, avatar fields
  usersDetails: any[] = [
    {
      name: 'John',
      job: 'Developer',
      gender: 'Male',
      country: 'USA',
      age: 25,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'Jane',
      job: 'Designer',
      gender: 'Female',
      country: 'USA',
      age: 30,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'Bob',
      job: 'Manager',
      gender: 'Male',
      country: 'USA',
      age: 35,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'Alice',
      job: 'HR',
      gender: 'Female',
      country: 'USA',
      age: 40,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'Tom',
      job: 'Developer',
      gender: 'Male',
      country: 'UK',
      age: 45,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'Sara',
      job: 'Designer',
      gender: 'Female',
      country: 'UK',
      age: 50,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'Peter',
      job: 'Manager',
      gender: 'Male',
      country: 'UK',
      age: 55,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'Jenny',
      job: 'HR',
      gender: 'Female',
      country: 'UK',
      age: 60,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
    {
      name: 'David',
      job: 'Developer',
      gender: 'Male',
      country: 'Canada',
      age: 65,
      avatar: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
  ];

  users = [
    { name: 'John', status: 'active' },
    { name: 'Jane', status: 'inactive' },
    { name: 'Bob', status: 'active' },
  ];

  constructor(private loggerService: LoggerService) {}

  AddNewUser(name: string, status: string) {
    this.users.push({ name, status });
    this.loggerService.LogMessage(name, status);
  }
}
