import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../categories-service';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {
  updateCategoryForm:any=FormGroup;
  categoryDetails:any;
  categoryId:any;

  constructor(private route:ActivatedRoute,private categoriesService:CategoriesService,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.categoryId=params['categoryId'];
    });
    this.updateCategoryForm=new FormGroup({
      categoryname:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      numberOfMovies:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    });
    this.fetchCategoryDetails()
  }

  fetchCategoryDetails(){
    this.categoryDetails=this.categoriesService.getCategoryById(JSON.parse(this.categoryId));
    this.fillInputs();
  }
  fillInputs(){
    this.updateCategoryForm.get('categoryname').setValue(this.categoryDetails.categoryname);
    this.updateCategoryForm.get('description').setValue(this.categoryDetails.description);
    this.updateCategoryForm.get('numberOfMovies').setValue(this.categoryDetails.numberOfMovies);
    this.updateCategoryForm.get('status').setValue(this.categoryDetails.status);
  }
  onSubmit(){
    if(this.updateCategoryForm.valid){
      try{
        let payload={
          id:JSON.parse(this.categoryId),
          categoryname:this.updateCategoryForm.value.categoryname,
          description:this.updateCategoryForm.value.description,
          numberOfMovies:this.updateCategoryForm.value.numberOfMovies,
          status:this.updateCategoryForm.value.status,

        }

        this.categoriesService.updateCategory(payload);
        this.updateCategoryForm.reset();
        window.alert('Category updated. Click OK to see all categories.');
        this.router.navigateByUrl('/categories/read-categories');
      }catch(error:any){
        console.error('Error updating category:',error);
        window.alert('Failed to update category. Please try again.');
      }
    }
  }
}