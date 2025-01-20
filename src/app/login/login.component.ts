import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out all required fields!';
      return;
    }
  
    const { username, password } = this.loginForm.value;
  
    if (username === 'touchworld' && password === 'touchworldTech') {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
  
}
