import { Component, OnInit } from '@angular/core';
import { SharedServices } from '../shared/api/shared.services';
import { SharedServicesProvider } from '../shared/api/shared-services.provider';
import { TvDefinitions } from './products/edit-product/edit-product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sharedServices: SharedServices,
    private sharedServicesProvider: SharedServicesProvider) { }

  ngOnInit() {
    this.sharedServices.getTvSchema()
      .subscribe((tvSchema: TvDefinitions[]) => {
        console.log(tvSchema);
        this.sharedServicesProvider.tvDefinitions.next(tvSchema);
      });
  }

}
