import {Component, OnInit, Input} from '@angular/core';
import {Meal} from "../../classes/meal";

@Component({
    selector: 'app-buy-burger',
    templateUrl: './buy-burger.component.html',
    styleUrls: ['./buy-burger.component.css']
})
export class BuyBurgerComponent implements OnInit {

    @Input() orderedMeal: Meal;

    constructor() {
    }

    ngOnInit() {
    }

    buy(): void {
        alert('Seu pedido foi realizado com sucesso');
    }

}
