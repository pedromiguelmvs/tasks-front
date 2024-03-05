import { Injectable } from '@angular/core';
import { Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private service: AuthService, private router: Router) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.check(segments);
  }

  private check(segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.service.check().pipe(
      switchMap((authenticated) => {
        if (!authenticated) {
          const redirectURL = `/${segments.join('/')}`;
          const urlTree = this.router.parseUrl(
            `login?redirectURL=${redirectURL}`
          );

          return of(urlTree);
        }

        return of(true);
      })
    );
  }
}
