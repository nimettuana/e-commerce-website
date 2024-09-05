import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  user_records: any[]= [];
  data = {
    name: '',
    email: '',
    password: '',
    phone: '',
  }
  cartItems: CartItem[] = [];
  public cartitems:number = 0;
  showproduct: any=[];
  public totalamount: number =0;

  constructor( private http: HttpClient, private dialog:MatDialog, private api:ApiService){
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
  }

  ngOnInit(): void {
    this.api.products().subscribe(res =>{
      this.cartitems = res.length;
    })
    this.api.products().subscribe(res =>{
      this.showproduct = res;
      this.totalamount = this.api.calculateprice();
      console.log('toplam fiyat: ',this.totalamount)
    })

  }


Empty(){
  this.api.removeAllItems();
}
}
