import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
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
@NgModule({
  imports: [
    RouterModule.forRoot([{path:"cart",component:CartComponent},{path:"user-login", component:UserLoginComponent},{path:"user-signup",component:UserRegistrationComponent},
    {path:"men-clothing",component:ClothingMensComponent}, {path:"women-clothing",component:ClothingWomensComponent}, {path:"kids-clothing",component:ClothingKidsComponent},
    {path:"mobile-gadgets",component:GadgetsMobilesComponent}, {path:"laptop-gadgets",component:GadgetsLaptopsComponent}, {path:"tv-gadgets",component:GadgetsTvsComponent},
     {path:"men-footwear",component:FootwearMenComponent},{path:"women-footwear",component:FootwearWomenComponent},{path:'**',component:HomeComponent}])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
