import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HomeComponent } from './home.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppTableModule } from '@app/components/table/table.module';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppTableModule,
    SharedModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatCheckboxModule,
    NgOptimizedImage,
  ],
  declarations: [HomeComponent, TaskDialogComponent],
})
export class HomeModule {}
