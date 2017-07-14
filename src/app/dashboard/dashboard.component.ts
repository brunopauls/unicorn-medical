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
  typescript_fragen : ISearchResultItem[] = [
    {
      answer_count: 0,
      closed_date: 1499966459,
      closed_reason: "string",
      creation_date: 1499966459,
      is_answered: false,
      last_activity_date: 1499966459,
      link: "https://stackoverflow.com/questions/45087264/how-to-cleanly-write-a-typescript-function-with-different-callback-overload-para",
      score: 55,
      tags: [
        "test",
        "two"
      ],
      title: "How to Cleanly Weite a TypeScript Function with Different Callback",
      view_count: 286
    }
  ];
  angular2_fragen : ISearchResultItem[] = [
    {
      answer_count: 0,
      closed_date: 1499966459,
      closed_reason: "string",
      creation_date: 1499966459,
      is_answered: false,
      last_activity_date: 1499966459,
      link: "https://stackoverflow.com/questions/45087264/how-to-cleanly-write-a-typescript-function-with-different-callback-overload-para",
      score: 55,
      tags: [
        "test",
        "two"
      ],
      title: "How to Cleanly Weite a TypeScript Function with Different Callback",
      view_count: 286
    }
  ];
  weather_fragen : ISearchResultItem[] = [
    {
      answer_count: 0,
      closed_date: 1499966459,
      closed_reason: "string",
      creation_date: 1499966459,
      is_answered: false,
      last_activity_date: 1499966459,
      link: "https://stackoverflow.com/questions/45087264/how-to-cleanly-write-a-typescript-function-with-different-callback-overload-para",
      score: 55,
      tags: [
        "test",
        "two"
      ],
      title: "How to Cleanly Weite a TypeScript Function with Different Callback",
      view_count: 286
    },
    {
      answer_count: 3,
      closed_date: 1499966459,
      closed_reason: "string",
      creation_date: 1499966459,
      is_answered: false,
      last_activity_date: 1499966459,
      link: "https://stackoverflow.com/questions/45087264/how-to-cleanly-write-a-typescript-function-with-different-callback-overload-para",
      score: 55,
      tags: [
        "test",
        "two"
      ],
      title: "Create a Weather App",
      view_count: 286
    },
    {
      answer_count: 1,
      closed_date: 1499966459,
      closed_reason: "string",
      creation_date: 1499966459,
      is_answered: false,
      last_activity_date: 1499966459,
      link: "https://stackoverflow.com/questions/45087264/how-to-cleanly-write-a-typescript-function-with-different-callback-overload-para",
      score: 55,
      tags: [
        "test",
        "two"
      ],
      title: "Create a Weather changing machine",
      view_count: 286
    },
    {
      answer_count: 1,
      closed_date: 1499966459,
      closed_reason: "string",
      creation_date: 1499966459,
      is_answered: false,
      last_activity_date: 1499966459,
      link: "https://stackoverflow.com/questions/45087264/how-to-cleanly-write-a-typescript-function-with-different-callback-overload-para",
      score: 55,
      tags: [
        "test",
        "two"
      ],
      title: "Create a Weather changing machine",
      view_count: 286
    },
    {
      answer_count: 1,
      closed_date: 1499966459,
      closed_reason: "string",
      creation_date: 1499966459,
      is_answered: false,
      last_activity_date: 1499966459,
      link: "https://stackoverflow.com/questions/45087264/how-to-cleanly-write-a-typescript-function-with-different-callback-overload-para",
      score: 55,
      tags: [
        "test",
        "two"
      ],
      title: "Create a Weather changing machine",
      view_count: 286
    }
  ]

  weather_daten = [];
  weather_general = [];

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService) { }

  ngOnInit() {
    // //Get TypeScript Questions
    // this.searchService.search("TypeScript").subscribe((typescript_res) => {
    //   this.typescript_fragen = typescript_res['items'].slice(0, 10);
    // });

    // //Get Angular2 Questions
    // this.searchService.search("Angular2").subscribe((angular2_res) => {
    //   this.angular2_fragen = angular2_res['items'].slice(0, 10);
    // });

    // //Get Weather Questions
    // this.searchService.search("Weather").subscribe((weather_res) => {
    //   this.weather_fragen = weather_res['items'].slice(0, 5);
    // });

    //Get Weather Data
    this.weatherService.getWeatherData().subscribe((weather_data) => {
      this.weather_daten = weather_data;
      //Merge Weather Questions and Data
      for (var i = 0; i < 5; i++) {
        this.weather_general.push({frage: this.weather_fragen[i], info: this.weather_daten[i]});
      }
    });

    
    
  }


  openQuestion(link: string){
    window.open(link, '_blank');
  }

  someMethod(stringParameter: string): void;
  someMethod(numberParameter: number, stringParameter: string): void;

  someMethod(stringOrNumberParameter: any, stringParameter?: string): void {
      if (stringOrNumberParameter && typeof stringOrNumberParameter == "number")
          alert("Variant #2: numberParameter = " + stringOrNumberParameter + ", stringParameter = " + stringParameter);
      else
          alert("Variant #1: stringParameter = " + stringOrNumberParameter);
  }
}
