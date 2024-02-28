import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories-service';

@Component({
  selector: 'app-read-categories',
  templateUrl: './read-categories.component.html',
  styleUrls: ['./read-categories.component.css']
})
export class ReadCategoriesComponent implements OnInit {
  categoryList:any = []
  deleteCategoryModal:boolean = false
  clickedCategoryData:any
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.fetchCategories()
  }

  fetchCategories(){
    this.categoryList=this.categoriesService.getCategories();
  }

  deleteCategory(item:any){
    this.clickedCategoryData = item
    this.deleteCategoryModal = true
  }
  deleteCategoryFromTable(categoryId: number) {
    this.categoriesService.deleteCategory(categoryId);
    this.fetchCategories();
    window.alert('Category deleted, Click ok to see all categories')
    this.deleteCategoryModal = false
  }

  closeDeleteCategoryModal(){
    this.deleteCategoryModal = false
  }
}
