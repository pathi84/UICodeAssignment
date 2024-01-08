import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private _http: HttpClient) {}


  getStoriesList(): Observable<any> {
    return this._http.get(environment.apiendpoint);
  }
}
