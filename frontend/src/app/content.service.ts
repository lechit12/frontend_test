import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentUrl = 'assets/content.json';

  constructor(private http: HttpClient) { }

  getContent(): Observable<any> {
    return this.http.get<any>(this.contentUrl);
  }
}
