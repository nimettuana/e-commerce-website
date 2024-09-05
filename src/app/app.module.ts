import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { NgOptimizedImage } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HesapComponent } from './hesap/hesap.component';
import { UyeComponent } from './uye/uye.component';
import { SepetComponent } from './sepet/sepet.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { CartServiceService } from './cart-service.service';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowuserComponent } from './showuser/showuser.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UyeliksizComponent } from './uyeliksiz/uyeliksiz.component';
import {MatRadioModule} from '@angular/material/radio';
import { OrderpageComponent } from './orderpage/orderpage.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HesapComponent,
    UyeComponent,
    SepetComponent,
    PopupComponent,
    ProductDetailComponent,
    ShowuserComponent,
    UyeliksizComponent,
    OrderpageComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatBadgeModule,
    MatSliderModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    RouterModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatStepperModule,
    MatDatepickerModule,

  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


export const routes: Routes = [
  { path: 'home', component: HomeComponent },

]
