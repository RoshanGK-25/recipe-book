import { Component } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  recipe!: Recipe;
}
