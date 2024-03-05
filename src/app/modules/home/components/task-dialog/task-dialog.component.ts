import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppConfirmationConfig } from '@app/services/confirmation/confirmation.types';
import { TaskInterface } from '../../home.types';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
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
export class TaskDialogComponent implements OnInit {
  public taskForm = this.formBuilder.group({
    id: [{ value: null, disabled: true }],
    name: ['', [Validators.required]],
    description: [''],
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TaskInterface,
    public readonly dialogRef: MatDialogRef<TaskDialogComponent>,
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.taskForm.get('id').enable();
      this.taskForm.patchValue(this.data);
    }
  }
}
