import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material/material.module';
import { UserService } from '../../../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  username: string = '';
  status: string = 'active';
  constructor(private userService: UserService) {}

  AddUser(): void {
    this.userService.AddNewUser(this.username, this.status);
    this.username = '';
    this.status = 'active';
    console.log(this.userService.users);
  }
}
