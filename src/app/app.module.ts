import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { LoadingComponent } from './loading/loading.component';
import { SearchComponent } from './search/search.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    LoadingComponent,
    SearchComponent,
    PeopleListComponent,
    PersonDetailComponent,
    PlanetDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: 'planet-detail/:name', component: PlanetDetailComponent },
      { path: 'person-detail/:name', component: PersonDetailComponent },
      { path: '', component: SearchComponent, pathMatch: 'full' },
      { path: '**', component: SearchComponent, pathMatch: 'full' }
    ])
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
