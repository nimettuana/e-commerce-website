import { NgModule, OnInit, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HesapComponent } from './hesap/hesap.component';
import { UyeComponent } from './uye/uye.component';
import { SepetComponent } from './sepet/sepet.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { UyeliksizComponent } from './uyeliksiz/uyeliksiz.component';
import { OrderpageComponent } from './orderpage/orderpage.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: 'home', component:HomeComponent},
  {path: 'hesap', component:HesapComponent},
  {path: 'uye', component:UyeComponent},
  {path: 'sepet', component:SepetComponent},
  {path: 'product-detail/:productid', component:ProductDetailComponent},
  {path: 'showuser', component:ShowuserComponent},
  {path: 'uyeliksiz', component:UyeliksizComponent},
  {path: 'orderpage', component:OrderpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{

  ngOnInit(): void {}


}
