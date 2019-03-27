import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TvDefinitions } from '../edit-product/edit-product.model';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

const componentMapper = {
  text: InputComponent,
  int: InputComponent,
  bool: RadioComponent
};

@Directive({ selector: '[appDynamicField]' })
export class AppDynamicFieldDirective implements OnInit {

  @Input() field: TvDefinitions;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}
