import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
    ingredeients: Ingredient[] = [new Ingredient('Bread', 2), new Ingredient('Cheese', 1), new Ingredient('Milk', 2), new Ingredient('Eggs', 12), new Ingredient('Butter', 1), new Ingredient('Sugar', 1), new Ingredient('Water', 12)];
}
