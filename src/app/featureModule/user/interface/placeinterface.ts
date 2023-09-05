export interface placeinterface {
    type: string;
    properties: Properties;
    geometry: Geometry;
    bbox?: (number)[] | null;
    center?: (number)[] | null;
    place_name: string;
    place_type?: (string)[] | null;
    place_type_name?: (null)[] | null;
    relevance: number;
    context?: (ContextEntity)[] | null;
    id: string;
    text: string;
    text_en: string;
    place_name_en: string;
    text_ml: string;
    language_ml: string;
    place_name_ml: string;
  }
  export interface Properties {
    ref: string;
    country_code: string;
    kind: string;
    place_type_name?: (null)[] | null;
  }
  export interface Geometry {
    type: string;
    coordinates?: (number)[] | null;
  }
  export interface ContextEntity {
    ref: string;
    country_code: string;
    kind: string;
    id: string;
    text: string;
    text_en: string;
    text_ml: string;
    language_ml: string;
    language?: string | null;
    language_en?: string | null;
  }
  