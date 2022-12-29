import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  receipes:Recipe[]=[
    new Recipe('Fish recipe', 'Good recipe', 'https://img.taste.com.au/BU7jqjpF/w720-h480-cfill-q80/taste/2016/11/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
