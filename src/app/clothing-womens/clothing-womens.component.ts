import { Component, OnInit } from '@angular/core';
import { HomeservicehttpService } from '../homeservicehttp.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-clothing-womens',
  templateUrl: './clothing-womens.component.html',
  styleUrls: ['./clothing-womens.component.css']
})
export class ClothingWomensComponent implements OnInit {
womendata:any;
b:any;
  constructor(private ds:HomeservicehttpService,private d2:CartService) { }

  ngOnInit() 
  {
    this.ds.getDataMen().subscribe(data=>this.womendata=data);
  }

toCart(val)
{
this.b=val;

this.ds.fromCart(this.womendata.women1[this.b]);
}
cartcount()
{
  this.d2.callMethodOfSecondComponent("abc");
}



  
  isDisc:boolean;
  column:string;
  direction:number;
  sort(property)
  {
    this.isDisc=!this.isDisc;
    this.column=property;
    this.direction=this.isDisc?1:-1;
  };


}
