import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  
  recipe: Recipe;
  id: number;
  
  constructor( private recipeService: RecipeService,
               private route: ActivatedRoute,
               private router: Router) { }
  
  ngOnInit() {
      //const id = this.route.snapshot.params['id'];
      this.route.params
          .subscribe(
                  (params: Params)=>{
                      this.id = + params['id']; //add + as cast from string to integer
                      this.recipe = this.recipeService.getRecipe(this.id);
                  }
          )
  }
  
  onAddToShoppingList(){
      this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
      
  }
  
  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo: this.route} );
      
  }

}
