import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recipe-details',
    imports: [],
    templateUrl: './recipe-details.component.html',
    styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent implements OnInit{
    recipe: any;
    constructor(private router: Router) {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        this.recipe = navigation.extras.state['recipe'];
        console.log('Recipe details received:', this.recipe); // Debugging: Verify the data
      } else {
        console.error('No recipe data found in state'); // Handle cases where no data is passed
        this.router.navigate(['/']); // Redirect to a fallback page or show an error
      }
    }

    ngOnInit(): void {
      
      }
}
