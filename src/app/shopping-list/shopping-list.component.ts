import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 7)
  ];
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simple the test", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_logo.jpeg&psig=AOvVaw10EWDALpmxUKs9GqUvUIQC&ust=1687438726874000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjloqG11P8CFQAAAAAdAAAAABAD")
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
