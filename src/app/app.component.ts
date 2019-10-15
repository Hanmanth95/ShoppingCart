import { Component,OnInit} from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '../../node_modules/@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  count:number=0;
  isLogedIn:boolean=false;

log:string="login";
constructor(private d:Router, private d1: CartService) {

  this.d1.invokeEvent.subscribe(value => {
   if(value === 'abc'){
    this.callMyMethod(); 
  }
  else{
    this.cartdecrement();
  }
  if(value.name&&value.pwd)
  {
    this.isLogedIn=true;
    this.changelogin();
  }
 }); 
 }

 callMyMethod()
 {
   if(this.isLogedIn){
    this.count=this.count+1;
   }
   else{
     console.log("please login");
   }
 }
 cartdecrement()
 {
   if(this.count>0)
   {
    this.count=this.count-1;
   }
  
 }
 changelogin()
 {
   this.isLogedIn=false;
   this.log="logout";
 }
 changelogout()
 {
   this.log="login";
   this.d.navigate(['user-login']);

 }
 
}

