import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../classes/ingredient";
import {IngredientService} from "../../services/ingredient.service";

@Component({
    selector: 'app-prepare-burger',
    templateUrl: './prepare-burger.component.html',
    styleUrls: ['./prepare-burger.component.css']
})
export class PrepareBurgerComponent implements OnInit {

    ingredients: Ingredient[];

    @Output() addIngredient = new EventEmitter<Ingredient>();

    constructor(private ingredientService: IngredientService) {
    }

    getIngredients(): void {
        this.ingredientService.getIngredients().then(ingredients => this.ingredients = ingredients);
    }

    ngOnInit() {
        this.getIngredients();
    }

    add(ingredient: Ingredient): void {
        this.addIngredient.emit(ingredient);
    }

}
