import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DaneService {

  constructor(private http: HttpClient) { }
  getDane(): Observable<any> {
    return this.http.get<any>('public/data.json');
  }
}
