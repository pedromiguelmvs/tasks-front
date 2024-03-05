import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard {
  constructor(
    private readonly service: AuthService,
    private readonly router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.check();
  }

  private check(): Observable<boolean> {
    return this.service.check().pipe(
      switchMap((authenticated) => {
        if (authenticated) {
          this.router.navigateByUrl('/-');
        }

        return of(true);
      })
    );
  }
}
