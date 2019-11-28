import { Component, OnInit } from '@angular/core';
import { RequestCountriesService } from '../request-countries/request-countries.service';
import { Router } from '@angular/router';
import { DataStorageService } from '../data-storage/data-storage.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries = [];

  constructor(
    protected requestCountriesService: RequestCountriesService,
    protected router: Router,
    protected dataStorageService: DataStorageService,
  ) { }

  ngOnInit() {
    this.requestCountriesService.requestCountries()
      .subscribe(countries => {
        let countryList = [];
        this.addID(countries, countryList);
      });
  }

  private addID(countries: any, countryList: any[]) {
    for (let i = 0; i < countries.length; i++) {
      let country = {
        name: countries[i].name,
        id: i
      };
      countryList.push(country);
    }
    this.countries = countryList;
  }

  openDetail(country) {
    this.dataStorageService.country = country;
    let url = `/detail/${country.id}`;
    this.router.navigate([url]);
  }

}
