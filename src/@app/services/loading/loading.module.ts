import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppLoadingInterceptor } from '@app/services/loading/loading.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppLoadingInterceptor,
      multi: true,
    },
  ],
})
export class AppLoadingModule {}
