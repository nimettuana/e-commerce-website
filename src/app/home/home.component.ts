import { CartServiceService } from './../cart-service.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SepetComponent } from '../sepet/sepet.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiService } from '../shared/api.service';
import { product } from '../sepet/productmodal';



interface Kolye {
  value: string;
  viewValue: string;
}

interface Bileklik {
  value: string;
  viewValue: string;
}

interface Küpe {
  value: string;
  viewValue: string;
}
interface Halhal {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('cardHover', [
      state('hover', style({
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      })),
      state('normal', style({
        transform: 'scale(1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      })),
      transition('normal <=> hover', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})


export class HomeComponent implements OnInit{


  public cartitems:number = 0;

  // categoryList =[ 'Bileklik', 'Küpe' , ];
  // cartItems = [
  //   {id: 1, name: 'Bileklik', price: 190, imageUrl: 'assets/images/incibileklik2.jpeg' },
  //   {id:2, name: 'Küpe', price:110, imageUrl: 'assets/images/charmkupe.jpeg'},
  // ];

data!:any | product[]

// Burası sepete ürün eklediğinde sepet üzerindeki numaranın artması için
basketCount = 0;

addItemToBasket() {
  this.basketCount++;
}

removeItemFromBasket() {
  this.basketCount--;
}



  constructor(private cartService: CartServiceService, private http: HttpClient, private api:ApiService ) { }

  kolyeler: Kolye[] = [
    {value: 'inci-0', viewValue: 'İnci Kolye'},
    {value: 'charm-1', viewValue: 'Charm Kolye'},
    {value: 'doğaltaş-2', viewValue: 'Doğal Taş Kolye'},
    {value: 'muranocam-3', viewValue: 'Murano Cam Kolye'},
  ];
  bileklikler: Bileklik[] = [
    {value: 'inci-0', viewValue: 'İnci Bileklik'},
    {value: 'charm-1', viewValue: ' Charm Bileklik'},
    {value: 'doğaltaş-2', viewValue: 'Doğal Taş Bileklik'},
    {value: 'muranocam-3', viewValue: 'Murano Cam Bileklik'},
  ];
  küpeler: Küpe[] = [
    {value: 'inci-0', viewValue: 'İnci Küpe'},
    {value: 'charm-1', viewValue: ' Charm Küpe'},
    {value: 'doğaltaş-2', viewValue: 'Doğal Taş Küpe'},
    {value: 'muranocam-3', viewValue: 'Murano Cam Küpe'},
  ];
  halhallar: Halhal[] = [
    {value: 'inci-0', viewValue: 'İnci Halhal'},
    {value: 'charm-1', viewValue: ' Charm Halhal'},
    {value: 'doğaltaş-2', viewValue: 'Doğal Taş Halhal'},
    {value: 'muranocam-3', viewValue: 'Murano Cam Halhal'},
  ];



  @Input() product: any;
  hoverState: string = 'normal';

  toggleHover(state: boolean) {
    this.hoverState = state ? 'hover' : 'normal';
  }

  ngOnInit(): void {
    this.displayproducts();
    this.api.products().subscribe(res =>{
      this.cartitems = res.length;

    })

  }


  // addToCart(item: any): void {
  //   this.cartService.addItem(item);
  //   console.log(`Added ${item.name} to cart`);
  // }

  // addToCart(item: any): void {
  //   this.cartService.addItem({ name: item.name, price: item.price, quantity: 1 });
  //   console.log(`Added ${item.name} to cart`);
  // }

  // addToCart(item: any): void {
  //   this.cartService.addItem(item);
  //   this.cartItems.push(item);
  //   this.basketCount++;
  //   console.log(`Added ${item.name} to cart`);
  // }

// addToCart(items: any): void {
//   items.forEach((item) => {
//     this.cartService.addItem(item);
//     this.cartItems.push(item);
//     this.basketCount++;
//     console.log(`Added ${item.name} to cart`);
//   });


displayproducts(){
  this.api.getproduct().subscribe(res =>{
this.data = res;
console.log(res)
  })
}

addToCart(item:product){
this.api.addToCart(item);
}

removeitem(item:product){
  this.api.removecartitem(item);
}



}



// class Basket {
//   private basketCount: number = 0;

//   addItemToBasket() {
//     this.basketCount++;
//   }

//   removeItemFromBasket() {
//     if (this.basketCount > 0) {
//       this.basketCount--;
//     }
//   }

//   getBasketCount(): number {
//     return this.basketCount;
//   }
// }



