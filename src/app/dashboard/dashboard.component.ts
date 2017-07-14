import { Component, OnInit } from '@angular/core';

import { SearchService } from '../core/services/search.service';
import { ISearchResultItem } from '../core/services/search.service';

import { WeatherService } from '../core/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  typescript_fragen : ISearchResultItem[] = [];
  angular2_fragen : ISearchResultItem[] = [];
  weather_fragen : ISearchResultItem[] = [];
  weather_daten = [];
  weather_general = [];
  typescript_fragen_loaded = false;
  angular2_fragen_loaded = false;
  weather_fragen_loaded = false;

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService) { }

  ngOnInit() {
    //Get TypeScript Questions
    this.searchService.search("TypeScript").subscribe((typescript_res) => {
      this.typescript_fragen = typescript_res['items'].slice(0, 10);
      this.typescript_fragen_loaded = true;
    });

    //Get Angular2 Questions
    this.searchService.search("Angular2").subscribe((angular2_res) => {
      this.angular2_fragen = angular2_res['items'].slice(0, 10);
      this.angular2_fragen_loaded = true;
    });

    //Get Weather Questions
    this.searchService.search("Weather").subscribe((weather_res) => {
      this.weather_fragen = weather_res['items'].slice(0, 5);
      //Get Weather Data
      this.weatherService.getWeatherData().subscribe((weather_data) => {
        this.weather_daten = weather_data;
        //Merge Weather Questions and Data
        for (var i = 0; i < 5; i++) {
          this.weather_general.push({frage: this.weather_fragen[i], info: this.weather_daten[i]});
          this.weather_fragen_loaded = true;
        }
      });
    });
  }

  openQuestion(link: string){
    window.open(link, '_blank');
  }
}
