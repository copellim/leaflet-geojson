import { Injectable } from '@angular/core';
import { Feature, GeoJsonObject } from 'geojson';
import {
  ImageOverlay,
  Layer,
  LeafletEvent,
  Map,
  PathOptions,
  geoJSON,
} from 'leaflet';
import { FeatureProperties } from '../types/FeatureProperties';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  properties: FeatureProperties = {
    description: 'name',
    baseLineColor: 'blue',
    highlightLineColor: 'red',
    lineOpacity: 0.65,
    lineWeight: 7,
  };

  baseStyle: PathOptions = {
    color: this.properties.baseLineColor,
    weight: this.properties.lineWeight,
    opacity: this.properties.lineOpacity,
  };

  hoverStyle: PathOptions = {
    color: this.properties.highlightLineColor,
    weight: this.properties.lineWeight,
    opacity: this.properties.lineOpacity,
  };

  constructor() {}

  public drawFeatures(map: Map, features: GeoJsonObject[] | null): void {
    if (!features) {
      return;
    }
    const lines = geoJSON(features, {
      onEachFeature: this.onEachFeature.bind(this),
      style: this.baseStyle,
    });
    lines.addTo(map);
  }

  private onEachFeature(feature: Feature, layer: Layer) {
    if (feature.properties && feature.properties[this.properties.description]) {
      layer.bindPopup(feature.properties[this.properties.description]);
    }
    layer.on({
      mouseover: this.highlightFeature.bind(this),
      mouseout: this.resetHighlight.bind(this),
    });
  }

  private highlightFeature(e: LeafletEvent) {
    const layer: ImageOverlay = e.target;
    layer.setStyle(this.hoverStyle);
  }

  private resetHighlight(e: LeafletEvent) {
    const layer: ImageOverlay = e.target;
    layer.setStyle(this.baseStyle);
  }
}
