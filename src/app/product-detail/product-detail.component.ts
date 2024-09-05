import { product } from './../sepet/productmodal';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

productData: any | product;
public cartitems:number = 0;
data!:any | product[]

  constructor(private api:ApiService, private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    // console.log("product id is: ", productid)
    productid && this.api.getproductbyid(productid).subscribe((res) =>{
      this.productData = res;
      console.log(res)
    })
    this.api.products().subscribe(res =>{
      this.cartitems = res.length;

    })
  }

  addToCart(item:product){
    this.api.addToCart(item);
    }
}
