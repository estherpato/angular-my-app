import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestCountriesService {

  constructor(
    protected http: HttpClient
  ) { }

  requestCountries() {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code*';
    return this.http.get<any>(url);
  }

}
