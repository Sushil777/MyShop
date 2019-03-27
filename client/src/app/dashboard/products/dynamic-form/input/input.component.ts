import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TvDefinitions } from '../../edit-product/edit-product.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  field: TvDefinitions;
  group: FormGroup;

  constructor() { }

  ngOnInit() { }
}
