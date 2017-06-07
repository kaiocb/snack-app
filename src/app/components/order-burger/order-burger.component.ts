import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../../classes/ingredient";
import {Meal} from "../../classes/meal";
import {OrderService} from "../../services/order.service";

@Component({
    selector: 'app-order-burger',
    templateUrl: './order-burger.component.html',
    styleUrls: ['./order-burger.component.css']
})
export class OrderBurgerComponent implements OnInit {

    @Input() selectedIngredients: Ingredient[];
    @Output() selectedIngredientsChange = new EventEmitter<Ingredient[]>();

    @Input() selectedMeal: Meal;
    @Output() selectedMealChange = new EventEmitter<Ingredient[]>();

    @Input() orderedMeal: Meal;
    @Output() orderedMealChange = new EventEmitter<Ingredient[]>();

    constructor(private orderService: OrderService) {
    }

    clean(): void {
        this.selectedIngredientsChange.emit([]);
        this.selectedMealChange.emit(null);
        this.orderedMealChange.emit(null);
    }

    check(): void {
        this.orderService.check(this.selectedIngredients).then(meal => this.orderedMeal = meal);
    }

    ngOnInit() {

    }

}
