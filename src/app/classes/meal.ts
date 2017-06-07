import {Ingredient} from "./ingredient";
import {Discount} from "./discount";

export class Meal {

    id: number;

    name: string;

    ingredients: Ingredient[];

    discounts: Discount[];

    price: number;

    constructor() {

    }

}
