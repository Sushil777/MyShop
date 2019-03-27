import { Component, OnInit, ViewChild } from '@angular/core';

import { TvDefinitions } from './edit-product.model';
import { AppDynamicFormComponent } from '../dynamic-form/dynamic-form.component';

import { SharedServices } from 'src/app/shared/api/shared.services';
import { SharedServicesProvider } from 'src/app/shared/api/shared-services.provider';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})

export class EditProductComponent implements OnInit {

  @ViewChild(AppDynamicFormComponent) form: AppDynamicFormComponent;
  tvDefinitions: TvDefinitions[] = [];

  constructor(private sharedServices: SharedServices,
    private sharedServicesProvider: SharedServicesProvider) { }

  ngOnInit() {
    this.sharedServicesProvider.tvDefinitions.subscribe(data => this.tvDefinitions = data);
  }

}
