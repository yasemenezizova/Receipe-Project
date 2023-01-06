import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients:Ingridient[]=[
    new Ingridient('Apple',5),
    new Ingridient('Pineapple',15)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
