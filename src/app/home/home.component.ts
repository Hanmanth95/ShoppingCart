import { Component, OnInit } from '@angular/core';
import { HomeservicehttpService } from '../homeservicehttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
imagedataMen:any[];
count:any;


  constructor(private ds:HomeservicehttpService,private route:Router) { }

  ngOnInit() 
  {
    this.ds.getDataMen().subscribe(data1=>this.imagedataMen=data1);
  }
  toMen()
  {
    this.route.navigate(['/men-clothing'])
  }
 
}
