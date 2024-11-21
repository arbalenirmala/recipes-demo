import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../../services/recipes.service';
import {ReviewRatingComponent} from '../review-rating/review-rating.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-all-recipes',
    imports: [ReviewRatingComponent],
    templateUrl: './all-recipes.component.html',
    styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent implements OnInit  {
  recipes: any[] = [];
  constructor(private recipeService: RecipeService ,private router: Router) {
    
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(
      (data: { recipes: any[]; }) => {
        this.recipes = data.recipes; // Adjust this based on the API response structure
      },
      (error: any) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  updateRating(newRating: number): void {
    console.log('Updated Rating:', newRating);
    // You can send the new rating to the server or handle it as needed
  }

  recipeDetailsPage(recipe: any): void{
    console.log("recipeDetailsPage");
    console.log(recipe);
    this.router.navigate(['/recipedetails'], { state: { recipe } });
  }

}
