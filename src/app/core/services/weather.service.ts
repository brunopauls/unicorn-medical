import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class WeatherService {
    weatherdata  = [];

    private static readonly jsonUrl =
        "assets/weatherdata.json";

    constructor(private http: Http) { 
    }
    
    //Returns 5 random weather informations
    getWeatherData(): Observable<any> {
        return this.http.get(WeatherService.jsonUrl)
            .map((res: Response) => {
                let data = res.json();
                var random_weather_data = [];
                for (var i = 0; i < 5; i++) {
                    random_weather_data.push(data[Math.floor(Math.random() * data.length)]);
                }
                return random_weather_data;
            });
    }
}
