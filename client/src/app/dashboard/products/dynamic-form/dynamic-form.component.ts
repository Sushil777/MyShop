import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TvDefinitions } from '../edit-product/edit-product.model';
import { SharedServicesProvider } from 'src/app/shared/api/shared-services.provider';
import { SharedServices } from 'src/app/shared/api/shared.services';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class AppDynamicFormComponent implements OnInit {

  @Input() fields: TvDefinitions[] = [];
  form: FormGroup;
  blockUI = false;

  dialogHeader;
  dialogBody;
  showDialog = false;

  constructor(
    private fb: FormBuilder,
    private sharedServices: SharedServices,
    private sharedServicesProvider: SharedServicesProvider) { }

  ngOnInit() {
    this.form = this.createControl();

    this.sharedServicesProvider.productId
      .subscribe(productId => {
        if (productId !== '') {
          this.blockUI = true;
          this.sharedServices.getTvProductById(productId)
            .subscribe(response => this.editProduct(response));
        }
      });
  }

  reset() {
    this.form.reset();
  }

  onSubmit() {
    this.dialogBody = '';
    if (this.form.value.Name === null || this.form.value.Name.trim().length < 1 ||
      this.form.value.Description === null || this.form.value.Description.trim().length < 1) {
      this.dialogHeader = 'Error';
      this.dialogBody = 'Name and Description are required.';
      this.showDialog = true;
    } else {
      this.newProduct(this.form.value);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      const control = this.fb.control(
        field.defaultValue,
        this.requiredValidation(field.mandatory || [])
      );
      group.addControl(field.caption, control);
    });
    return group;
  }

  requiredValidation(mandatory) {
    if (mandatory === true) {
      const validList = [];
      const validations = [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        }
      ];

      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  newProduct(productData) {
    const data = {
      Name: productData.Name,
      Description: productData.Description
    };
    if (productData.Height === null) {
      data['Height'] = '';
    } else {
      data['Height'] = productData.Height;
    }
    if (productData.Width === null) {
      data['Width'] = '';
    } else {
      data['Width'] = productData.Width;
    }
    if (productData.IsSmart === null) {
      data['IsSmart'] = false;
    } else {
      data['IsSmart'] = productData.IsSmart;
    }

    this.sharedServices.createTvProduct(data)
      .subscribe(response => {
        this.reset();
        this.dialogHeader = 'Product';
        this.dialogBody = 'Product added successfully';
        this.showDialog = true;
      });
  }

  editProduct(editProductData) {
    this.form.patchValue({
      Name: editProductData.Name,
      Description: editProductData.Description,
      Height: editProductData.Height,
      Width: editProductData.Width,
      IsSmart: editProductData.IsSmart
    });
    this.blockUI = false;
  }
}
