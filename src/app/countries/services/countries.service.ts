import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1';

  searchCApital(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  searchCountry(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  searchRegion(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  searchCode(term:string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${term}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError(error => {
        console.log(error);
        return of(null)
      })
    );
  }
}
