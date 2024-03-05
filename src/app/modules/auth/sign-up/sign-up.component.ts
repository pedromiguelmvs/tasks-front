import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  NgForm,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AppToastService } from '@app/services/toast';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthSignUpComponent implements OnInit {
  public signUpForm: UntypedFormGroup;

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private readonly authService: AuthService,
    private readonly toastService: AppToastService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    });
  }

  signUp(): void {
    this.signUpForm.disable();

    this.authService.signUp(this.signUpForm.value).subscribe(() => {
      this.router.navigateByUrl('/login');         
    });
  }
}
