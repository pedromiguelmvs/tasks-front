import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from '../../../shared/shared.module';
import { AuthSignInComponent } from './sign-in.component';
import { authSignInRoutes } from './sign-in.routing';
import { MatCheckboxModule } from "@angular/material/checkbox";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [AuthSignInComponent],
  imports: [
    RouterModule.forChild(authSignInRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatCheckboxModule,
    NgOptimizedImage,
  ],
})
export class AuthSignInModule {}
