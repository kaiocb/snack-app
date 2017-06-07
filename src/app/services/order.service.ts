import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Ingredient} from "../classes/ingredient";
import {Meal} from "../classes/meal";
import {environment} from "../../environments/environment";

@Injectable()
export class OrderService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private url = 'order';

    constructor(private http: Http) {
    }

    check(ingredients: Ingredient[]): Promise<Meal> {
        return this.http
            .post(environment.host + this.url + '/check', JSON.stringify(ingredients), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Meal[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
