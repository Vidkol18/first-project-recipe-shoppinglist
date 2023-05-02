import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Chicken Breast', 'Chicken breasts are a great way to make BBQ chicken', 'https://images.pexels.com/photos/6107773/pexels-photo-6107773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
        new Recipe('Pancakes', 'Pancakes are a great way to to start your day.', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    ];
}
