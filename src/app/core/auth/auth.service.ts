import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  Subscription,
  switchMap,
  throwError,
} from 'rxjs';

import { AuthUtils } from './auth.utils';
import { UserService } from '../user/user.service';
import {
  LoginBodyInterface,
  LoginResponseInterface,
  SignUpBodyInterface,
} from './auth.types';

import * as decoder from 'jwt-decode';
import { UserJWTInterface } from '../interfaces/interfaces.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser: BehaviorSubject<UserJWTInterface> = new BehaviorSubject<UserJWTInterface>({} as UserJWTInterface);

  private authenticated: boolean = false;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly userService: UserService
  ) {
    if (this.accessToken) {
      const user = decoder.jwtDecode(this.accessToken);
      this.loggedUser.next(user as UserJWTInterface);
    }
  }

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  public signIn(
    credentials: LoginBodyInterface
  ): Observable<LoginResponseInterface> {
    if (this.authenticated) {
      return throwError(() => 'O usuário já está conectado.');
    }

    return this.httpClient.post('@api/auth/login', credentials).pipe(
      switchMap((response: LoginResponseInterface) => {
        if (response && response.token) {
          this.authenticated = true;
          this.accessToken = response.token;

          const user: Partial<{ username: string; id: string; }> = decoder.jwtDecode(response.token);
          this.userService.user = { id: +user.id, username: user.username };
          this.loggedUser.next({ id: +user.id, username: user.username });
        }

        return of(response);
      })
    );
  }

  public signUp(credentials: SignUpBodyInterface): any {
    return this.httpClient.post('@api/auth/register', credentials);
  }

  public signInUsingToken(): Observable<boolean> {
    return this.httpClient.get('@api/auth/login').pipe(
      catchError(() => of(false)),
      switchMap((response: UserJWTInterface) => {
        this.authenticated = true;
        this.userService.user = response;

        return of(true);
      })
    );
  }

  public signOut(): Observable<any> {
    localStorage.removeItem('accessToken');

    this.authenticated = false;

    return of(true);
  }

  public check(): Observable<boolean> {
    if (this.authenticated) {
      return of(true);
    }

    if (!this.accessToken) {
      return of(false);
    }

    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }

    return this.signInUsingToken();
  }
}
