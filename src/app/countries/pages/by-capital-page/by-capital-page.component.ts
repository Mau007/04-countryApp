import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent  {

  public countries:Country[]=[];
  constructor(private countriesService: CountriesService){}

 searchByCapital(term:string):void{
  // console.log('Aqui entra despues del search-box-component. Desde ByCapitalPageComponent');
  // console.log({term});
  this.countriesService.searchCApital(term).subscribe(
    countries => {
      this.countries = countries
    }
  )

 }


}
