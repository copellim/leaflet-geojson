import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { GeoJsonObject } from 'geojson';
import { Map, map, tileLayer } from 'leaflet';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { FeatureService } from './services/feature.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  providers: [FeatureService],
  selector: 'geo-json-map',
  templateUrl: './geoJsonMap.component.html',
  styleUrls: ['./geoJsonMap.component.css'],
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @Input() features: Observable<GeoJsonObject[]> | null = null;
  private destroy$: Subject<void> = new Subject<void>();

  private map: Map | null = null;

  private initMap(): void {
    this.map = map('map', {
      center: [45.6676, 7.4568],
      zoom: 11,
    });

    const tiles = tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor(private markerService: FeatureService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.features
      ?.pipe(
        takeUntil(this.destroy$),
        tap((features) => this.markerService.drawFeatures(this.map!, features))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
