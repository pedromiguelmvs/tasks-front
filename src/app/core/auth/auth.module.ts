import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [AuthService],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    if (!environment.mockApi) {
      return {
        ngModule: AuthModule,
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
          }
        ]
      };
    }

    return { ngModule: AuthModule };
  }
}
