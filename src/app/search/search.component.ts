import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { SearchType } from './search-type.enum';
import 'rxjs/add/operator/catch';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  errorMessage: string;
  searchCtrl: FormControl;
  showLoading: boolean = true;
  placeholder: string;
  searchType: string;
  planets: any[];
  people: any[];

  constructor(private _swService: StarWarsService) {
    this.setSearchType('planet');
  }

  ngOnInit() {
    this.searchCtrl = new FormControl();
    this.searchCtrl.valueChanges
      .forEach(valueTyped => this.filterSearch(valueTyped));
  }

  onChangeRadioGroup(event: any): void {
    this.errorMessage = '';
    this.showLoading = true;
    this.setSearchType(event.value);
  }

  setSearchType(type: string): void {
    if (type === SearchType.Planet) {
      this.placeholder = 'Type a planet eg. Tatooine';
      this.searchType = SearchType.Planet;
      this.planets = [];

      this._swService.getPlanets()
        .subscribe(planets => {
          this.planets = planets.results
          this.showLoading = false;
        });
    }
    else if (type === SearchType.People){
      this.placeholder = 'Type a character eg. Luke Skywalker';
      this.searchType = SearchType.People;
      this.people = [];

      this._swService.getPeople()
        .subscribe(people => {
          this.people = people.results
          this.showLoading = false;
        });
    }
  }

  filterSearch(valueTyped: string): void {
    this.errorMessage = '';

    if (this.searchType === SearchType.Planet) {
      this._swService.getPlanetByName(valueTyped)
        .subscribe(planets => {
          this.planets = planets.results;

          if (!this.planets.length) {
            this.errorMessage = 'Planet not found.';
          }
        });
    }
    else if (this.searchType === SearchType.People) {
      this._swService.getPeopleByName(valueTyped)
        .subscribe(people => {
          this.people = people.results

          if (!this.people.length) {
            this.errorMessage = 'Person not found.';
          }
        });
    }
  }
}
