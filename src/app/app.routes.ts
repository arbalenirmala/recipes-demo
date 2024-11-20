import { Routes } from '@angular/router';
import {AllRecipesComponent} from './components/all-recipes/all-recipes.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/allrecipes', pathMatch: 'full' },
    { path: 'allrecipes', component: AllRecipesComponent },
    { path:'recipedetails', component: RecipeDetailsComponent },
    { path: '**', redirectTo: '/allrecipes' }
];
