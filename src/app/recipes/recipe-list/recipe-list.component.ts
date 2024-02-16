import { Component } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../recipe.modal';

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
    imports: [RecipeItemComponent]
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];
    
}
