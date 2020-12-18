import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public http: HttpClient
  ) { }

  getData(data) {
    var url = "";
    return this.http.post(url, data, {headers: new HttpHeaders({"content-Type": "application/json"})});
  }
}
