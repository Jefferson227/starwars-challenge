import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  showLoading: boolean = true;
  name: string;
  population: number;
  diameter: number;
  climate: string;
  gravity: string;
  films: any[];

  constructor(private _route: ActivatedRoute, private _swService: StarWarsService, private _router: Router) {
    this.getParameters();
  }

  ngOnInit() {
    this._swService.getPlanetByName(this.name)
      .subscribe(planet => {
        let planetDetails = planet.results[0];

        this.population = planetDetails.population;
        this.diameter = planetDetails.diameter;
        this.climate = planetDetails.climate;
        this.gravity = planetDetails.gravity;

        this.films = [];

        planetDetails.films
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
