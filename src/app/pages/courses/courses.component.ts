import { Component, OnInit } from '@angular/core';
import { JavaComponent } from './components/java/java.component';
import { PythonComponent } from './components/python/python.component';
import { EnrollService } from '../../services/enroll.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [JavaComponent, PythonComponent, CommonModule, AddUserComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [EnrollService, UserService, LoggerService],
})
export class CoursesComponent implements OnInit {
  constructor(
    private enrollService: EnrollService,
    private userService: UserService,
    private loggerService: LoggerService
  ) {}

  users: { name: string; status: string }[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
