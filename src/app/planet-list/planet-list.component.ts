import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent {
  @Input()
  planets: any[];

  constructor(private _router: Router) { }

  goToDetails(name: string): void {
    this._router.navigate([`/planet-detail/${name}`]);
  }
}
