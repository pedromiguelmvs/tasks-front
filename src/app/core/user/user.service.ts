import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserJWTInterface } from '../interfaces/interfaces.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: ReplaySubject<UserJWTInterface> =
    new ReplaySubject<UserJWTInterface>(1);

  constructor(private httpClient: HttpClient) {}

  set user(value: UserJWTInterface) {
    this._user.next(value);
  }

  get user$(): Observable<UserJWTInterface> {
    return this._user.asObservable();
  }

  editProfile(data: UserJWTInterface): Observable<any> {
    return this.httpClient.post<UserJWTInterface>(
      '@api/authentication/edit-profile',
      data
    );
  }

  editPassword(data: {
    password: string;
    newPassword: string;
    confirmPassword: string;
  }): Observable<any> {
    return this.httpClient.post<UserJWTInterface>(
      '@api/authentication/edit-password',
      data
    );
  }

  getInfoByCEP(cep: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.viaCepUrl}/${cep}/json`);
  }
}
