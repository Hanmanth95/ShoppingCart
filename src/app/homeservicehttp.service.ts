import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeservicehttpService {
fromc:any;
  constructor(private httpclient:HttpClient)
   {
   }
    getDataMen()
    {
      return this.httpclient.get<any[]>("/men-clothing");
     
    }

    fromCart(val1):Observable<any>
    {
      console.log(val1);
      return this.httpclient.post<any>('/men',val1);
   
    
     
    }
    fromToCart()
    {
      return this.httpclient.get<any[]>('/mencloths');
    }
    delCart(x):Observable<any>
    {
      console.log(x);
      return this.httpclient.delete("/del"+"/"+x);
    }
   }


