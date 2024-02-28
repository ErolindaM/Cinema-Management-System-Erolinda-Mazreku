import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { CreateMoviesComponent } from "./components/create-movies/create-movies.component";
import { ReadMoviesComponent } from "./components/read-movies/read-movies.component";
import { UpdateMoviesComponent } from "./components/update-movies/update-movies.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";

const routes:Routes=[
    {
        path:'movies',component:MoviesComponent,children:[
            {path:'create-movies',component:CreateMoviesComponent},
            {path:'read-movies',component:ReadMoviesComponent},
            { path: 'update-movies/:id', component: UpdateMoviesComponent },
            { path: 'movie-details/:id', component: MovieDetailsComponent },
        ]   
    }
];
export const MoviesRoutingModule=RouterModule.forChild(routes);