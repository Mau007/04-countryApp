import { Country } from "./country";
import { Region } from "./region.type";


export interface CacheStore{
  byCapital:    TermCountries;
  byCountries:  TermCountries;
  byRegion:     RegionCountries;
}

export interface Countries{
  countries : Country[];
}

export interface TermCountries extends Countries{
  term : string;
}

export interface RegionCountries extends Countries{
  region : Region;
}

