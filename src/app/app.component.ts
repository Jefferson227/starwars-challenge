import { Component } from '@angular/core';
import { StarWarsService } from './star-wars.service';
import { PlanetListComponent } from './planet-list/planet-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StarWarsService ]
})
export class AppComponent {
  title = 'app';
}
