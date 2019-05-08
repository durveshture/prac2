import { CustomerModel } from './../models/Customer';
/*  author: Durvesh Ture(173571)
 *  version: 1.0.1
 */

import { ProductModel } from './../models/Product';
import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { MerchantModel } from '../models/Merchant';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  product = new ProductModel();
  productArr: ProductModel[] = [];
  customerArr: CustomerModel[] = [];
  merchantArr: MerchantModel[] = [];
  queryString: String;
  resultTrue = false;

  constructor(private service: SearchServiceService) { }

  ngOnInit() {
  }



  getProducts() {
    this.service.getProducts(this.queryString).subscribe(
      result => {
        this.productArr = result;
        this.resultTrue = true;
       }
    );
      }


  ngOnDestroy(): void {
    // this.productArr= null;

  }

}
