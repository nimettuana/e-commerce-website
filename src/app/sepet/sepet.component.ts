import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { HttpClient } from '@angular/common/http';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog} from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';
import { product } from './productmodal';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styleUrls: ['./sepet.component.css'],

})
export class SepetComponent implements OnInit {

  constructor(private cartService: CartServiceService, private http: HttpClient, private dialog:MatDialog, private api:ApiService) { }

cartItems: CartItem[] = [];
showproduct: any=[];

public cartitems:number = 0;
public totalamount: number =0;

ngOnInit(): void {
  // this.cartItems = this.cartService.getCartItems();
  // console.log(this.cartService.getCartItems());

  this.api.products().subscribe(res =>{
    this.cartitems = res.length;
  })
  this.api.products().subscribe(res =>{
    this.showproduct = res;
    this.totalamount = this.api.calculateprice();
    console.log('toplam fiyat: ',this.totalamount)
  })

}

deleteitem(item:product){
  this.api.removecartitem(item)
}




// addToCart(item: any): void {
//   this.cartService.addItem(item);
//   console.log(`Added ${item.name} to cart`);

// }


// removeItem(item: CartItem) {
//   const index = this.cartItems.indexOf(item);
//   if (index !== -1) {
//     this.cartItems.splice(index,1);
//   }
// }

checkout() {
  console.log('Checkout clicked');
}

startShopping() {
  console.log('Start shopping clicked');
}

openDialog() {
  const dialogRef = this.dialog.open(PopupComponent);
}

Empty(){
  this.api.removeAllItems();
}
}


