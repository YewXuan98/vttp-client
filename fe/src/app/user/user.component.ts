import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService, UserDto } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userDetailsForm: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder // Inject FormBuilder
  ) {
    this.userDetailsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: [''] // Add additional validators as needed
    });
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');

    if (userId) {
      const userIdNumber = +userId;

      this.userService.getUserDetails(userIdNumber.toString()).subscribe(
        (response: any) => {
          console.log('User details:', response);
          this.userDetailsForm.patchValue(response);
        },
        (error: any) => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }

  updateAccount(): void {
    this.updateUser();
  }

  updateUser(): void {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      const userDto: UserDto = {
        email: this.userDetailsForm.value.email,
        password: this.userDetailsForm.value.newPassword || undefined,
      };
      this.userService.updateUser(userId, userDto).subscribe(
        (response: any) => {
          console.log('User updated:', response);
          this.userDetailsForm.patchValue({ email: response.email, newPassword: '' });
          alert('Your account has been updated successfully! Please relogin.');

          this.authService.loggedIn.emit(false);
          this.router.navigate(['/login']);

        },
        (error: any) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }
}
