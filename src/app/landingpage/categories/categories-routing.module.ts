import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { CreateCategoriesComponent } from "./components/create-categories/create-categories.component";
import { ReadCategoriesComponent } from "./components/read-categories/read-categories.component";
import { UpdateCategoriesComponent } from "./components/update-categories/update-categories.component";
import { CategoryDetailsComponent } from "./components/category-details/category-details.component";

const routes:Routes=[
    {
        path:'categories',component:CategoriesComponent,children:[
            {path:'create-categories',component:CreateCategoriesComponent},
            {path:'read-categories',component:ReadCategoriesComponent},
            { path: 'update-categories/:id', component: UpdateCategoriesComponent },
            { path: 'category-details/:id', component: CategoryDetailsComponent },
        ]   
    }
];
export const CategoriesRoutingModule=RouterModule.forChild(routes);