import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppConfirmationConfig } from '@app/services/confirmation/confirmation.types';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './dialog.component.html',
  styles: [
    `
      .app-confirmation-dialog-panel {
        @screen md {
          @apply w-128;
        }

        .mat-mdc-dialog-container {
          .mat-mdc-dialog-surface {
            padding: 0 !important;
          }
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AppConfirmationConfig
  ) {}
}
