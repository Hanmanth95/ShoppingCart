import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CartService {

  invokeEvent: Subject<any> = new Subject(); 

  callMethodOfSecondComponent(b) { 
    this.invokeEvent.next(b)      
  }
}
  