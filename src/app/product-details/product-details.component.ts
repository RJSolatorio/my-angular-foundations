import { Component } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 1,
      name: 'Friendly Bot',
      description: 'A friendly robot head with two eyes and a smile -- great for domestic use.',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2
    };
  }

  getImageUrl(product: IProduct): string {
    return '/images/robot-parts/' + product.imageName;
  }

  addToCart(product: IProduct, event: MouseEvent): void {
    product.name += ' (added to cart)';
    console.log(event);
  }

}
