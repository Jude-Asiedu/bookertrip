import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';


@Component({
  selector: 'app-login',
  imports: [SharedModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


    loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onLogin() {
    if (this.loginForm.valid) {
      // 👇 Replace with real login logic
      console.log('Login successful:', this.loginForm.value);

      // Navigate to dashboard (or wherever)
      this.router.navigate(['/admin']);
    }

      this.router.navigate(['/admin']);

  }

  signInWithGoogle() {
    // 👇 Replace with Google auth logic
    console.log('Google login triggered');
    this.router.navigate(['/search']);
  }

}
