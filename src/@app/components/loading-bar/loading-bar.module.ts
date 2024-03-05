import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppLoadingBarComponent } from '@app/components/loading-bar/loading-bar.component';

@NgModule({
  declarations: [AppLoadingBarComponent],
  imports: [CommonModule, MatProgressBarModule],
  exports: [AppLoadingBarComponent],
})
export class AppLoadingBarModule {}
