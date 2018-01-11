import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StarWarsService {
  baseUrl: string = 'https://swapi.co';
  headers: HttpHeaders = new HttpHeaders();

  constructor(private _http: HttpClient) {
    this.headers.append('Origin', '*');
  }

  getPlanets(): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/planets`, { headers: this.headers });
  };

  getPlanetById(planetId: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/planets/${planetId}/`, { headers: this.headers });
  };

  getPlanetByName(planetName: string): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/planets/?search=${planetName}`, { headers: this.headers });
  };

  getPeople(): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/people/`, { headers: this.headers });
  };

  getPeopleById(peopleId: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/people/${peopleId}/`, { headers: this.headers });
  };

  getPeopleByName(peopleName: string): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/people/?search=${peopleName}`, { headers: this.headers });
  };

  getFilmById(filmId: number): Observable<any> {
    return this._http.get(`${this.baseUrl}/api/films/${filmId}/`, { headers: this.headers });
  };
}
