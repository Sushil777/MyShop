import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SharedServices {

  constructor(private http: HttpClient) { }

  getTvSchema() {
    return this.http.get(`${environment.serverUri}/api/product-definitions/tv`);
  }

  getAllTvProducts() {
    return this.http.get(`${environment.serverUri}/api/products/tv`);
  }

  getTvProductById(productId) {
    return this.http.get(`${environment.serverUri}/api/products/tv/${productId}`);
  }

  createTvProduct(productData) {
    return this.http.post(`${environment.serverUri}/api/products/tv`, productData);
  }

}
