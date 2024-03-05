import { ModuleWithProviders, NgModule } from '@angular/core';
import { APP_CONFIG } from '@app/services/config/config.constants';

@NgModule()
export class AppConfigModule {
  constructor() {}

  static forRoot(config: any): ModuleWithProviders<AppConfigModule> {
    return {
      ngModule: AppConfigModule,
      providers: [
        {
          provide: APP_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
