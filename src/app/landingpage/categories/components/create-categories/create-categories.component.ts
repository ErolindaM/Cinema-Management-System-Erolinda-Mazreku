import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {
  createCategoryForm: any = FormGroup;

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.createCategoryForm = new FormGroup({
      categoryname: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      numberOfMovies: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.createCategoryForm.valid) {
      try {
        this.categoriesService.addCategory(this.createCategoryForm.value);
        this.createCategoryForm.reset();
        window.alert('Category created. Click OK to see all categories.');
        this.router.navigateByUrl('/categories/read-categories');
      } catch (error: any) {
        if (error.message === 'A category with these details already exists') {
          window.alert('A category with these details already exists. Please check your input.');
        } else {
          console.error('Error creating category:', error);
          window.alert('Failed to create category. Please try again.');
        }
      }
    } else {
      window.alert('Form is not valid. Please check your input.');
    }
  }
}
