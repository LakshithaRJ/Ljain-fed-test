import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  fetchSingleUserDetails() {
    return this.http.get('https://randomuser.me/api/');
  }

  fetchMultipleUserDetails() {
    return this.http.get('https://randomuser.me/api/?results=5');
  }
}
