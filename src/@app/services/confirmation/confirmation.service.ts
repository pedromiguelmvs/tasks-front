import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge } from 'lodash-es';

import { AppConfirmationDialogComponent } from './dialog/dialog.component';
import { AppConfirmationConfig } from './confirmation.types';

@Injectable({
  providedIn: 'root',
})
export class AppConfirmationService {
  private defaultConfig: AppConfirmationConfig = {
    title: 'Confirmar ação',
    message: 'Você tem certeza de que deseja confirmar esta ação? <span class="font-semibold">Essa ação não pode ser desfeita!</span>',
    icon: {
      show: true,
      name: 'heroicons_outline:exclamation',
      color: 'warn',
    },
    actions: {
      confirm: {
        show: true,
        label: 'Confirmar',
        color: 'primary',
      },
      cancel: {
        show: true,
        label: 'Cancelar',
      },
    },
    dismissible: false,
  };
  constructor(private readonly matDialog: MatDialog) {}

  open(
    config: AppConfirmationConfig = {}
  ): MatDialogRef<AppConfirmationDialogComponent> {
    const userConfig = merge(
      {},
      this.defaultConfig,
      config
    );

    return this.matDialog.open(AppConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: !userConfig.dismissible,
      data: userConfig,
      panelClass: 'app-confirmation-dialog-panel',
    });
  }
}
