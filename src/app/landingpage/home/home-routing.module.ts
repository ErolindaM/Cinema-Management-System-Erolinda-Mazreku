import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AllMoviesComponent } from "./components/all-movies/all-movies.component";

const routes:Routes=[
    {
        path:'home',component:HomeComponent,children:[
            {path:'all-movies',component:AllMoviesComponent},
        ]   
    }
];
export const HomeRoutingModule=RouterModule.forChild(routes);