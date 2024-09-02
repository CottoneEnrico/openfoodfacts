import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FoodService } from '../food.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  routeObs: Observable<ParamMap>; 

  item : any;
  FoodServiceObs: Observable<Object>;
  constructor(
    private route: ActivatedRoute, 
    private service: FoodService,
    private location: Location  ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  
  getRouterParam = (params: ParamMap) =>
  {
    let ItemID = params.get('id');
    this.FoodServiceObs = this.service.getItem(ItemID) ;
    this.FoodServiceObs.subscribe((data) => this.item = data)
    console.log(this.item);
  }
  back() : void
  {
    this.location.back();
  }
}
