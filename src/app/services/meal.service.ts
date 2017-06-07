import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {environment} from "../../environments/environment";

import {Meal} from "../classes/meal";

@Injectable()
export class MealService {

    private url = 'meal';

    constructor(private http: Http) {
    }

    getMeals(): Promise<Meal[]> {
        return this.http.get(environment.host + this.url + '/list')
            .toPromise()
            .then(response => response.json() as Meal[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
