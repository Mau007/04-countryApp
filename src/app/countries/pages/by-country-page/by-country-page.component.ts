import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent  {

  public countries :Country[]=[];

  constructor(private countriesService:CountriesService) { }

  searchByCountry(term:string):void{
    // console.log('Aqui entra despues del search-box-component. Desde ByCapitalPageComponent');
    // console.log({term});
    this.countriesService.searchCountry(term).subscribe(
      countries => {
        this.countries = countries
      }
    )

   }

}
