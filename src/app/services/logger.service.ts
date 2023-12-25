import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(
      `NEW user with Name: ${name} and with  Status: ${status} has been created`
    );
  }
}
