import { MerchantModel } from './models/Merchant';
import { CustomerModel } from './models/Customer';
/*  author: Durvesh Ture(173571)
 *  version: 1.0.1
 */

import { Injectable } from '@angular/core';
import { ProductModel } from './models/Product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  productArr: ProductModel[] = [];
  constructor(private http: HttpClient) { }

  baseHref="http://localhost:8280";

  getProducts(queryString: String) {
    return this.http.get<ProductModel[]>(this.baseHref + '/getproduct/?queryString=' + queryString);
  }

}
