import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../movies-service';
import { CategoriesService } from 'src/app/landingpage/categories/categories-service';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.css']
})
export class UpdateMoviesComponent implements OnInit {
  updateMovieForm!: FormGroup;
  movieDetails: any;
  movieId: any;
  categoryList: any[] = []; // categoryList to hold the list of categories

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private categoriesService: CategoriesService, // Inject CategoriesService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['movieId'];
    });

    this.updateMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      synopsis: new FormControl('', Validators.required),
    });

    this.fetchCategoryDetails();
    this.fetchCategories(); // Fetch categories for dropdown
  }

  fetchCategoryDetails() {
    this.movieDetails = this.moviesService.getMovieById(JSON.parse(this.movieId));
    this.fillInputs();
  }

  fillInputs() {
    if (this.movieDetails) {
      this.updateMovieForm.patchValue({
        title: this.movieDetails.title,
        category: this.movieDetails.category,
        director: this.movieDetails.director,
        releaseDate: this.movieDetails.releaseDate,
        synopsis: this.movieDetails.synopsis,
      });
    }
  }
  

  onSubmit() {
    if (this.updateMovieForm.valid) {
      try {
        let payload = {
          id: JSON.parse(this.movieId),
          title: this.updateMovieForm.value.title,
          category: this.updateMovieForm.value.category,
          director: this.updateMovieForm.value.director,
          releaseDate: this.updateMovieForm.value.releaseDate,
          synopsis: this.updateMovieForm.value.synopsis,
        }

        this.moviesService.updateMovie(payload);
        this.updateMovieForm.reset();
        window.alert('Movie updated. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/read-movies');
      } catch (error: any) {
        console.error('Error updating movie:', error);
        window.alert('Failed to update movie. Please try again.');
      }
    }
  }

  fetchCategories() {
    this.categoryList = this.categoriesService.getCategories();
  }
}
