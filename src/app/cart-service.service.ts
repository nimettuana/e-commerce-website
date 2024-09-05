import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItems: any[] = [];

  constructor(){}

  getCartItems() {
    return this.cartItems;
  }

  // addItem(item: any): void {
  //   const existingItem = this.cartItems.find(i => i.id === item.id);
  //   if (existingItem) {
  //     existingItem.quantity++;
  //   } else {
  //     this.cartItems.push({ ...item, quantity: 1 });
  //   }
  // }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  // addItem(item: any) {
  //   this.cartItems.push(item);
  // }
  addItem(item:any) {
    const existingItem = this.cartItems.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }


  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }




}



