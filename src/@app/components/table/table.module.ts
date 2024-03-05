import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';

import { getPaginatorIntl } from '@app/components/table/paginator-intl';

import { AppTableComponent } from './table.component';
import { TableKeyValuePipe } from './table.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [AppTableComponent, TableKeyValuePipe],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
  ],
  exports: [AppTableComponent],
})
export class AppTableModule {}
