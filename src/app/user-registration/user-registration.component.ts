import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit 
{
  capch:number;
  name:any;
  pwd:any;
  mobile:any;
  gender1:any;
  gender2:any;


  constructor(private route:Router,private http:HttpClient)
   { 

  }

  ngOnInit() {
  }
  onSubmit(v)
  {
    if(v.name && v.pwd && v.mobile){
    this.http.post<string>('/user-signup',v).subscribe(msg=>{
      alert(msg);
      this.route.navigate(['/user-login']);
    })
  }
  else{
    alert('enter details')
  }
   
      
   
  }

}
