import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  public cartitems:number = 0;
  public totalamount: number = 0;
  constructor(private api:ApiService){}

ngOnInit(): void {
  setTimeout(() => {

  },4000);

  this.totalamount =this.api.calculateprice();
}


}
