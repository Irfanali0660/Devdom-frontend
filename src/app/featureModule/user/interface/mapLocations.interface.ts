export interface MapLocationsInterface {
  type: string;
  id: string;
  properties: {
    ref: string;
    country_code: string;
    place_type_name: Array<string>;
  };
  geometry: GeomertryInterface;
  bbox: Array<number>;
  center: [number, number];
  place_name: string;
  place_type: Array<string>;
  relevance: number;
  text: string;
  context: Array<{
    id: string;
    ref: string;
    text: string;
  }>;
  text_en: string;
  language_en: string;
  place_name_en: string;
  language: string;
}

export interface GeomertryInterface {
  type: string;
  coordinates: Array<[number, number]> | [number, number];
}
