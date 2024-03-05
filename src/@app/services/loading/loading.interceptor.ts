import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AppLoadingService } from '@app/services/loading/loading.service';

@Injectable()
export class AppLoadingInterceptor implements HttpInterceptor {
  handleRequestsAutomatically: boolean;

  constructor(private readonly appLoadingService: AppLoadingService) {
    this.appLoadingService.auto$.subscribe((value) => {
      this.handleRequestsAutomatically = value;
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.handleRequestsAutomatically) {
      return next.handle(req);
    }

    this.appLoadingService.setLoadingStatus(true, req.url);

    return next.handle(req).pipe(
      finalize(() => {
        this.appLoadingService.setLoadingStatus(false, req.url);
      })
    );
  }
}
