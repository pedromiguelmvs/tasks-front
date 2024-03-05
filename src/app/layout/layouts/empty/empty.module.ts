import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { EmptyLayoutComponent } from './empty.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [EmptyLayoutComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    SharedModule,
  ],
  exports: [EmptyLayoutComponent],
})
export class EmptyLayoutModule {}
