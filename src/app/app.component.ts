import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GeoJsonObject } from 'geojson';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'map-sample';
  featureDataPath: string = '/assets/data/tappa03/tracks.geojson';
  features$: Observable<GeoJsonObject[]> = this.http.get<GeoJsonObject[]>(
    this.featureDataPath
  );

  constructor(private http: HttpClient) {}
}
