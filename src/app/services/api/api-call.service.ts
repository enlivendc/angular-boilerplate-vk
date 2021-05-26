import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService extends ApiConfiguration {

  constructor(private http: HttpClient) {
    super();
  }

  getRequestOption() {
    return {
      headers: {}
    };
  }

  public postData(subUrl: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const request: string = this.baseUrl + subUrl;
      this.http.post(request, data, this.getRequestOption())
        .subscribe(
          data => resolve(data),
          error => reject(error)
        );
    });
  }
}
