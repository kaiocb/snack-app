import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule}    from '@angular/http';

import {AppComponent} from './app.component';

import {IngredientService} from './services/ingredient.service';
import {MealService} from './services/meal.service';
import {OrderService} from './services/order.service';

import {ChooseBurgerComponent} from './components/choose-burger/choose-burger.component';
import {PrepareBurgerComponent} from './components/prepare-burger/prepare-burger.component';
import {OrderBurgerComponent} from './components/order-burger/order-burger.component';

@NgModule({
    declarations: [
        AppComponent,
        ChooseBurgerComponent,
        PrepareBurgerComponent,
        OrderBurgerComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        IngredientService,
        MealService,
        OrderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
