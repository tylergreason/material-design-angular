import { Component, OnInit } from '@angular/core';
import { loremIpsum } from '../../shared/commonFunctions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    console.log(loremIpsum());
  }

  loremIpsum(length = 20, chance = 0.2) {
    return loremIpsum(length, chance);
  }

}
