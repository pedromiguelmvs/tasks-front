import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../../../shared/shared.module';

import { AppLoadingBarModule } from '@app/components/loading-bar';
import { AppToastModule } from '@app/components/toast';

import { SidebarLayoutComponent } from './sidebar.component';
import { UserModule } from '../../common/user/user.module';

@NgModule({
  declarations: [SidebarLayoutComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    AppLoadingBarModule,
    AppToastModule,
    UserModule
  ],
  exports: [SidebarLayoutComponent],
})
export class SidebarLayoutModule {}
