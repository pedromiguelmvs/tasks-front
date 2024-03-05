import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppConfirmationService } from '@app/services/confirmation/confirmation.service';
import { AppConfirmationDialogComponent } from '@app/services/confirmation/dialog/dialog.component';

@NgModule({
  declarations: [AppConfirmationDialogComponent],
  imports: [MatButtonModule, MatDialogModule, MatIconModule, CommonModule],
  providers: [AppConfirmationService],
})
export class AppConfirmationModule {
  constructor() {}
}
