import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    
    if (password !== confirmPassword) {
      
      return { mismatch: true };
    } else {
      
      return null;
    }
  }

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.authService.register(email, password).subscribe({
      next: (response) => {
        alert('Registration successful!');
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert('Registration failed!');
        console.error(error);
      }
    });
  }

  get passwordMismatch(): boolean {
    
    return this.form.hasError('mismatch');
  }
}
