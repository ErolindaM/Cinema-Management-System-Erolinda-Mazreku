import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCategoriesComponent } from './components/create-categories/create-categories.component';
import { ReadCategoriesComponent } from './components/read-categories/read-categories.component';
import { UpdateCategoriesComponent } from './components/update-categories/update-categories.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategoriesComponent,
    ReadCategoriesComponent,
    UpdateCategoriesComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoriesModule { }
