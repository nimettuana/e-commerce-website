import { product } from './../sepet/productmodal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();
  updateCartItemCount(count: number) {
    this.cartItemCount.next(count);
  }

  public cartitemlist : any=[];
  public productlist = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }

  getproduct() {

    return this.http.get<product[]>("https://dummyjson.com/products")
  }

  getproductbyid(id:string){

    return this.http.get("https://dummyjson.com/products/"+id)
  }


  addToCart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }
  products(){
    return this.productlist.asObservable();
  }
  removecartitem(data:product){

    this.cartitemlist.map((a:product,index:product) =>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1);
      }
    })
    this.productlist.next(this.cartitemlist);
  }
  calculateprice(){

    let total=0;
    this.cartitemlist.map((a:any) =>{
      total += a.price;
    })
    return Math.round(total * 100) / 100;
    // return total;
    // burada 'return Math.round(total * 100) / 100;' ekleyerek büyük basamaklı sayılar toplandığında ondalıklı olarak yuvarlamasını sağladım.
  }

  removeAllItems(){
    this.cartitemlist=[];
    this.productlist.next(this.cartitemlist)

  }


  private apiUrl = 'https://api.example.com/users';
  register(user: any) {
    return this.http.post(this.apiUrl, user);
  }
}
