import { Component, OnInit } from '@angular/core';
import { HomeservicehttpService } from '../homeservicehttp.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-clothing-mens',
  templateUrl: './clothing-mens.component.html',
  styleUrls: ['./clothing-mens.component.css']
})
export class ClothingMensComponent implements OnInit {
menData:any[];
b:any[];
c:any;


  constructor(private ds:HomeservicehttpService,private d:CartService) { }

  ngOnInit() {
    this.ds.getDataMen().subscribe(data=>this.menData=data);
   
  }
toCart(val)
{
console.log(val);
this.ds.fromCart(val).subscribe(data=>{alert(data)});
}
cartcount()
{
  this.d.callMethodOfSecondComponent("abc");
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
