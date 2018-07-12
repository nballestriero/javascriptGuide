import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService{
    constructor(private http: Http,
                private recipeService: RecipeService,
                private authService: AuthService) {}
    
    storageRecipes(){
        const token = this.authService.getToken();
        return this.http.put('https://ngrecipe-214ae.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }
    
    getRecipes(){
        const token = this.authService.getToken();

        return this.http.get('https://ngrecipe-214ae.firebaseio.com/recipes.json?auth=' + token)
                   .pipe(map(
                           (response: Response) => {
                               const recipes : Recipe[] = response.json();
                               for(let recipe of recipes){
                                   if (!recipe['ingredients']){
                                       recipe['ingredients'] = [];
                                   }
                               }
                               console.log(recipes);
                               return recipes;
                           }
                   ))
                   .subscribe(
                            (recipes: Recipe[]) => {
                                this.recipeService.setRecipes(recipes);
                            }
                    );
    }
    
}