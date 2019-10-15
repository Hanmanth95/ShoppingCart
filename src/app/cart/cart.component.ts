import { Component, OnInit } from '@angular/core';
import { HomeservicehttpService } from '../homeservicehttp.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
tocart:any[];
cart:any[];



  constructor(private ds:HomeservicehttpService,private d3:CartService) {
    
   }

  ngOnInit()
   {
    this.ds.fromToCart().subscribe(data=>this.cart=data)
    
 
}
removeCart(v)
{
  console.log("id is",v);
 this.ds.delCart(v).subscribe(data=>this.cart=data);
  
}
decrement()
{
  this.d3.callMethodOfSecondComponent("ab");
}


  
  

}
