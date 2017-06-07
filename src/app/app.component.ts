import {Component} from '@angular/core';
import {Ingredient} from "./classes/ingredient";
import {Meal} from "./classes/meal";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    orderedMeal: Meal;
    selectedMeal: Meal;
    selectedIngredients: Ingredient[];

    constructor() {
        this.selectedIngredients = [];
    }

    addIngredient(ingredient: Ingredient): void {
        this.selectedIngredients.push(ingredient);
    }

    addMeal(meal: Meal): void {
        this.selectedMeal = meal;
        meal.ingredients.forEach(ingredient => this.addIngredient(ingredient));
    }

}
