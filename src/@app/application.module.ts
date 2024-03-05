import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppMediaWatcherModule } from '@app/services/media-watcher';
import { AppLoadingModule } from '@app/services/loading';
import { AppConfirmationModule } from '@app/services/confirmation';

@NgModule({
  imports: [
    AppMediaWatcherModule,
    AppConfirmationModule,
    AppLoadingModule,
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: {
        doctype: true,
        theme: false,
        version: true,
      },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
        floatLabel: 'always',
      },
    },
  ],
})
export class ApplicationModule {
  constructor(@Optional() @SkipSelf() parentModule?: ApplicationModule) {
    if (parentModule) {
      throw new Error(
        'AppModule has already been loaded. Import this module in the AppModule only.'
      );
    }
  }
}
