import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeoJsonObject } from 'geojson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataDownloaderService {
  constructor(private http: HttpClient) {}

  featureDataPath: string = '/assets/data/tracks.geojson';

  public getFeaturesFromAssets(): Observable<GeoJsonObject[]> {
    return this.http.get<GeoJsonObject[]>(this.featureDataPath);
  }
}
