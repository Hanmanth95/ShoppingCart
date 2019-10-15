import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RoutingModule } from './/routing.module';
import { HomeComponent } from './home/home.component';
import { ClothingMensComponent } from './clothing-mens/clothing-mens.component';
import { ClothingWomensComponent } from './clothing-womens/clothing-womens.component';
import { ClothingKidsComponent } from './clothing-kids/clothing-kids.component';
import { GadgetsMobilesComponent } from './gadgets-mobiles/gadgets-mobiles.component';
import { GadgetsLaptopsComponent } from './gadgets-laptops/gadgets-laptops.component';
import { GadgetsTvsComponent } from './gadgets-tvs/gadgets-tvs.component';
import { FootwearMenComponent } from './footwear-men/footwear-men.component';
import { FootwearWomenComponent } from './footwear-women/footwear-women.component';
import { CartComponent } from './cart/cart.component';
import { HomeservicehttpService } from './homeservicehttp.service';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { CartService } from './cart.service';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    HomeComponent,
    ClothingMensComponent,
    ClothingWomensComponent,
    ClothingKidsComponent,
    GadgetsMobilesComponent,
    GadgetsLaptopsComponent,
    GadgetsTvsComponent,
    FootwearMenComponent,
    FootwearWomenComponent,
    CartComponent,
    SearchPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule, FormsModule, RoutingModule, HttpClientModule
  ],
  providers: [HomeservicehttpService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }


