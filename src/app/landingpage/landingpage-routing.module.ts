import { RouterModule, Routes } from "@angular/router";
import { LandingpageComponent } from "./landingpage.component";

const routes:Routes=[
    {path:'',component:LandingpageComponent,children:[
        {path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
        {path:'',loadChildren:()=>import('./categories/categories.module').then(m=>m.CategoriesModule)},
        {path:'',loadChildren:()=>import('./movies/movies.module').then(m=>m.MoviesModule)},
    ]}
];
export const LandingpageRoutingModule=RouterModule.forChild(routes);