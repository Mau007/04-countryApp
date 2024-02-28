import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  // public hasLoaded:boolean=false;

  constructor(
    private activedRoute:ActivatedRoute,
    private router : Router,
    private countriesService: CountriesService
    ) { }

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCode(id)),
    )
    .subscribe( country => { //({id}) =>{
      //console.log({params: id});
      if(!country) return this.router.navigateByUrl('');
      console.log(country);
      return this.country = country;
      return;
    }
    );
  }

}
