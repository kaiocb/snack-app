import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Meal} from "../../classes/meal";
import {MealService} from "../../services/meal.service";

@Component({
    selector: 'app-choose-burger',
    templateUrl: './choose-burger.component.html',
    styleUrls: ['./choose-burger.component.css']
})
export class ChooseBurgerComponent implements OnInit {

    meals: Meal[];

    @Output() addMeal = new EventEmitter<Meal>();

    constructor(private mealService: MealService) {
    }

    getMeals(): void {
        this.mealService.getMeals().then(meals => this.meals = meals);
    }

    ngOnInit() {
        this.getMeals();
    }

    choose(meal: Meal): void {
        this.addMeal.emit(meal);
    }

}
