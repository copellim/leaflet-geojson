import { Component } from '@angular/core';
import { GeoJsonObject } from 'geojson';
import { Observable } from 'rxjs';
import { DataDownloaderService } from './data-downloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'map-sample';
  features$: Observable<GeoJsonObject[]> =
    this.dataService.getFeaturesFromAssets();

  constructor(private dataService: DataDownloaderService) {}
}
