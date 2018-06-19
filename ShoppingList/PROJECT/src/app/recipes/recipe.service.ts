import { Recipe } from './recipe.model';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable() //to inject a service in a service
export class RecipeService {
    private recipes: Recipe[] = [
                         new Recipe(
                                     'A Test Recipe',
                                     'This is simply a test',
                                     'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
                                     [
                                          new Ingredient('Meat', 1),
                                          new Ingredient('French Fries', 20)
                                     ]
                                    ),
                         new Recipe(
                                     'Another Test Recipe',
                                     'This is simply a test',
                                     'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
                                     [
                                          new Ingredient('Carrot', 5),
                                          new Ingredient('chicken beast', 2) 
                                     ]
                                   )
                       ];
    constructor(private slServer: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();  //use slice() to return a copy of the array not the reference(pointer) to the original
    }
    
    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slServer.addIngredients(ingredients);
        
    }
    
    getRecipe(index: number){
        return this.recipes[index];
    }
    
}