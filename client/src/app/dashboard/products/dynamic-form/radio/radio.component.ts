import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TvDefinitions } from '../../edit-product/edit-product.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})

export class RadioComponent implements OnInit {

  field: TvDefinitions;
  group: FormGroup;

  constructor() { }

  ngOnInit() { }

}
