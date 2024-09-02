import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  item: string;
  title = 'first-routed-app';
  obsTrack: Observable<Object>;
  results: any;
  
  constructor(public food: FoodService) {}

  submit(itemName: HTMLInputElement): void {

    if (!itemName.value) {
      return;
    }
    this.item = itemName.value;
    this.obsTrack = this.food.searchItem(this.item);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

}
