import { Component, ElementRef, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [MaterialModule, HomePageComponent],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss',
})
export class SecondPageComponent {
  @ViewChild('dobInput') dateOfBirth: ElementRef;
  @ViewChild('ageInput') age: ElementRef;

  // @ViewChild(HomePageComponent, { static: true }) homePage: HomePageComponent;

  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth.nativeElement.value
    ).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;

    this.age.nativeElement.value = age;
    // console.log(this.dateOfBirth);
    // console.log(this.age);
  }
}
