import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {environment} from "../../environments/environment";

import {Ingredient} from "../classes/ingredient";

@Injectable()
export class IngredientService {

    private url = 'ingredient';

    constructor(private http: Http) {
    }

    getIngredients(): Promise<Ingredient[]> {
        return this.http.get(environment.host + this.url + '/list')
            .toPromise()
            .then(response => response.json() as Ingredient[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
