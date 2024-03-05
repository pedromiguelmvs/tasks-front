import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgForm,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { finalize } from 'rxjs';

import { AppToastService } from '@app/services/toast';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthSignInComponent implements OnInit {
  public signInForm: UntypedFormGroup;

  constructor(
    private readonly toastService: AppToastService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly authService: AuthService,
    private readonly formBuilder: UntypedFormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  signIn(): void {
    this.signInForm.disable();

    this.authService
      .signIn(this.signInForm.value)
      .pipe(
        finalize(() => {
          this.signInForm.enable();
        })
      )
      .subscribe({
        next: () => {
          const redirectURL =
            this.activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
            '/dashboard';
          this.router.navigateByUrl(redirectURL);
        },
        error: (error) => {
          this.toastService.handleMessage(
            error,
            'Não foi possível fazer login.',
            { handleRequest: true }
          );
        },
      });
  }
}
