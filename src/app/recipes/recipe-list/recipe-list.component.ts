import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>() 
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg')
    ,new Recipe('Another Test Recipe', 'This is simply a another test', 'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg')
    
  ];
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  constructor() { }

  ngOnInit() {
  }

}
