import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  showLoading: boolean = true;
  name: string;
  height: string;
  gender: string;
  birthYear: string;
  hairColor: string;
  skinColor: string;
  homeworld: string;
  homeworldLink: string;
  films: any[];

  constructor(private _route: ActivatedRoute, private _swService: StarWarsService, private _router: Router) {
    this.getParameters();
  }

  ngOnInit() {
    this._swService.getPeopleByName(this.name)
    .subscribe(people => {
      let person = people.results[0];

      this.height = person.height;
      this.gender = person.gender;
      this.birthYear = person.birth_year;
      this.hairColor = person.hair_color;
      this.skinColor = person.skin_color;
      
      let planetId = person.homeworld.split('/')[5];

      this._swService.getPlanetById(planetId)
        .subscribe(planet => {
          this.homeworld = planet.name
          this.homeworldLink = `/planet-detail/${this.homeworld}`;
        });

      this.films = [];

      person.films
       .forEach(film => {
          let filmId = parseInt(film.split('/')[5]);
          let filmObservable = this._swService.getFilmById(filmId)
                                  .subscribe(filmReturned => {
                                    this.films.push(filmReturned.title);
                                  });
        });
      this.showLoading = false;
    });
  }

  getParameters(): void {
    this.name = this._route.snapshot.paramMap.get('name');
  }

  goBack(): void {
    this._router.navigate(['']);
  }
}
