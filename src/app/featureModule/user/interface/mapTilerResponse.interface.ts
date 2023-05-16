import { MapLocationsInterface } from './mapLocations.interface';
export interface MapTilerResponseInterface {
  type: string;
  features: MapLocationsInterface[];
  query: Array<string>;
  attribution: string;
}
