import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  constructor() {}

  onEnrollClicked(title: string) {
    console.log('Enroll clicked: ' + title);
    alert(`Thank you for enrolling in ${title}`);
    return true;
  }
}
