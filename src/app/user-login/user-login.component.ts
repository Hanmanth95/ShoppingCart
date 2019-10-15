import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeservicehttpService } from '../homeservicehttp.service';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  name:any;
  pwd:any;
 

  constructor(private route:Router,private ds:HomeservicehttpService,private d6:CartService,private http:HttpClient) { }

  ngOnInit() {
  }
  onSubmit(f)
  {
    if(f.name && f.pwd){
    this.http.post('/user-login',f).subscribe(msg=>{alert(msg);
      if(msg!="Invalid User"){
    this.route.navigate(['/home']);
      }
    })
  }
  else{
    alert("enter login details");
  }
   
  }
  navigateTo()
  {
    this.route.navigate(['/user-signup']);
    
  }
  logout(v)
  {
    this.d6.callMethodOfSecondComponent(v);
  }

 

 

  
  

}
