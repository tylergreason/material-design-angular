import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loremIpsum } from '../../shared/commonFunctions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList: { name: string, header: string, desc: string, imageUrl: string }[] = [];
  imageUrls: string[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.productsList.push({
        name: loremIpsum(10),
        header: loremIpsum(20),
        desc: loremIpsum(50),
        imageUrl: ''
      })
    }

    const imageObs = this.http.get('https://picsum.photos/v2/list?limit==100');

    imageObs.subscribe(images => {
      for (let i = 0; i < this.productsList.length; i++) {
        const idx = Math.floor(Math.random() * images.length);
        this.productsList[i].imageUrl = images[idx].download_url;
        images.splice(idx, 1);
      }
    })
  }

  loremIpsum(length = 20, chance = 0.2) {
    return loremIpsum(length, chance);
  }

}
