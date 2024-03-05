import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { EmptyLayoutModule } from './layouts/empty/empty.module';
import { SidebarLayoutModule } from './layouts/sidebar/sidebar.module';

@NgModule({
  imports: [SharedModule, EmptyLayoutModule, SidebarLayoutModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent, EmptyLayoutModule, SidebarLayoutModule],
})
export class LayoutModule {}
