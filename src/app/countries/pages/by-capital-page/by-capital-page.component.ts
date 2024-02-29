import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit  {

  public isLoading:boolean=false;
  public countries:Country[]=[];
  public initialValue:string ='';

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

 searchByCapital(term:string):void{
  // console.log('Aqui entra despues del search-box-component. Desde ByCapitalPageComponent');
  // console.log({term});
  this.isLoading=true;
  this.countriesService.searchCApital(term).subscribe(
    countries => {
      this.countries = countries;
      this.isLoading = false;
    }
  )

 }


}
