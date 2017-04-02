import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../core/service/retailer.service';
import { Retailer } from '../entity/retailer';
import { Retailers } from '../entity/retailers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  retailerArray: Retailer[];

  constructor(private retailerService: RetailerService) { }

  ngOnInit() {
    //this.retailerService.getRetailers().then(retailerArray => this.retailerArray = retailerArray);
    this.retailerArray = Retailers
  }
  
  //center
  lat: number = 46.506809;
  lng: number = -65.234524;

}
