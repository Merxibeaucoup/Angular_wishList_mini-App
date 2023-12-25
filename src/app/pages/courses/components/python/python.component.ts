import { Component } from '@angular/core';
import { EnrollService } from '../../../../services/enroll.service';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [],
  templateUrl: './python.component.html',
  styleUrl: './python.component.scss',
})
export class PythonComponent {
  title: string = 'Python';

  constructor(private enrollService: EnrollService) {}

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
