import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CreateMoviesComponent } from './components/create-movies/create-movies.component';
import { ReadMoviesComponent } from './components/read-movies/read-movies.component';
import { UpdateMoviesComponent } from './components/update-movies/update-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    CreateMoviesComponent,
    ReadMoviesComponent,
    UpdateMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MoviesModule { }
