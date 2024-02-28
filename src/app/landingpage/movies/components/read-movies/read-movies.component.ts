import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies-service';

@Component({
  selector: 'app-read-movies',
  templateUrl: './read-movies.component.html',
  styleUrls: ['./read-movies.component.css']
})
export class ReadMoviesComponent implements OnInit {
  movieList: any = [];
  filteredMovieList: any = [];
  deleteMovieModal: boolean = false;
  clickedMovieData: any;
  categoryList: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
    this.filteredMovieList = this.movieList;
    this.getUniqueCategories(); // Call the function to get unique categories
  }

  fetchMovies() {
    this.movieList = this.moviesService.getMovies();
    this.filteredMovieList = this.movieList;
  }

  deleteMovie(item: any) {
    this.clickedMovieData = item;
    this.deleteMovieModal = true;
  }

  deleteMovieFromTable(movieId: number) {
    this.moviesService.deleteMovie(movieId);
    this.fetchMovies();
    window.alert('Movie deleted, Click ok to see all movies');
    this.deleteMovieModal = false;
  }

  closeDeleteMovieModal() {
    this.deleteMovieModal = false;
  }

  onCategoryFilterChange(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    if (category === '') {
      this.filteredMovieList = this.movieList;
    } else {
      this.filteredMovieList = this.movieList.filter((movie: any) => movie.category === category);
    }
  }

  getUniqueCategories() {
    const categories = this.movieList.map((movie: any) => movie.category);
    this.categoryList = Array.from(new Set(categories));
  }
}
