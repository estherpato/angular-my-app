import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryListComponent,
    CountryCardComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
