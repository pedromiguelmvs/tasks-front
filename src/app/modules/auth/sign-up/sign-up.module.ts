import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../../shared/shared.module';
import { AuthSignUpComponent } from './sign-up.component';
import { authSignUpRoutes } from './sign-up.routing';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [AuthSignUpComponent],
  imports: [
    RouterModule.forChild(authSignUpRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
})
export class AuthSignUpModule {}
