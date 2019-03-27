import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TvDefinitions } from '../edit-product/edit-product.model';
import { SharedServices } from 'src/app/shared/api/shared.services';
import { SharedServicesProvider } from 'src/app/shared/api/shared-services.provider';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})

export class SearchProductComponent implements OnInit {

  blockUI = false;
  tvProducts = [];

  constructor(
    private router: Router,
    private sharedServices: SharedServices,
    private sharedServicesProvider: SharedServicesProvider) { }

  ngOnInit() {
    this.blockUI = true;
    this.sharedServices.getAllTvProducts()
      .subscribe((response: TvDefinitions[]) => {
        // console.log(response);
        this.tvProducts = response;
        this.blockUI = false;
      },
      (error) => {
        // console.log(error);
        this.blockUI = false;
      });

      this.sharedServices.getTvSchema()
        .subscribe((tvSchema: TvDefinitions[]) => {
          // console.log(tvSchema);
          this.sharedServicesProvider.tvDefinitions.next(tvSchema);
      });
  }

  edit(id) {
    this.sharedServicesProvider.productId.next(id);
    this.router.navigate(['/products/edit-product']);
  }

}
