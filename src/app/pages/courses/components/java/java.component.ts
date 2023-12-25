import { Component } from '@angular/core';
import { EnrollService } from '../../../../services/enroll.service';

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [],
  templateUrl: './java.component.html',
  styleUrl: './java.component.scss',
  // providers: [EnrollService],
})
export class JavaComponent {
  title: string = 'java';

  constructor(private enrollService: EnrollService) {}

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
