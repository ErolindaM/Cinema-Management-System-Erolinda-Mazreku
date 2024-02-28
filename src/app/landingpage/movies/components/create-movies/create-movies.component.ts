import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../movies-service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/landingpage/categories/categories-service';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {
  createMovieForm!: FormGroup;
  categoryList: any[] = []; // Declare categoryList here

  constructor(
    private moviesService: MoviesService,
    private categoryService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      synopsis: new FormControl('', Validators.required)
    });

    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryList = this.categoryService.getCategories();
  }

  onSubmit() {
    if (this.createMovieForm.valid) {
      try {
        this.moviesService.addMovie(this.createMovieForm.value);
        this.createMovieForm.reset();
        window.alert('Movie created. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/read-movies');
      } catch (error: any) {
        if (error.message === 'A movie with these details already exists') {
          window.alert('A movie with these details already exists. Please check your input.');
        } else {
          console.error('Error creating movie:', error);
          window.alert('Failed to create movie. Please try again.');
        }
      }
    } else {
      window.alert('Form is not valid. Please check your input.');
    }
  }
}