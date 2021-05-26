import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiCallService } from './api/api-call.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<any>(null);

  constructor(
    private apiCall: ApiCallService,
  ) {
    this.updateUser();
  }

  setUser(user) {
    this.user.next(user);
  }

  getUser() {
    return this.user;
  }

  // save current user information
  saveUserInfo(info: any) {
    if (info) {
      this.user.next(info);
      localStorage.setItem('accountUser', JSON.stringify(info));
    } else {
      this.removeUserData();
    }
  }

  // update current user information
  updateUser() {
    const user = localStorage.getItem('accountUser');
    if (user) {
      this.user.next(JSON.parse(user));
    }
  }

  removeUserData() {
    this.user.next(null);
    localStorage.removeItem('accountUser');
  }

}
