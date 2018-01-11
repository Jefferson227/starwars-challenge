import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  @Input()
  people: any[];

  constructor(private _router: Router) { }

  goToDetails(name: string): void {
    this._router.navigate([`/person-detail/${name}`]);
  }
}
