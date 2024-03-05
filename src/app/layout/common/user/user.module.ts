import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import { UserComponent } from './user.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    SharedModule,
    RouterLink,
  ],
  exports: [UserComponent],
})
export class UserModule {}
