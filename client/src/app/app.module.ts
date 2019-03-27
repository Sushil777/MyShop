import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeng
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchProductComponent } from './dashboard/products/search-product/search-product.component';
import { EditProductComponent } from './dashboard/products/edit-product/edit-product.component';
import { AppDynamicFormComponent } from './dashboard/products/dynamic-form/dynamic-form.component';
import { AppDynamicFieldDirective } from './dashboard/products/dynamic-form/dynamic-field.directive';
import { InputComponent } from './dashboard/products/dynamic-form/input/input.component';
import { RadioComponent } from './dashboard/products/dynamic-form/radio/radio.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { SharedServices } from './shared/api/shared.services';
import { SharedServicesProvider } from './shared/api/shared-services.provider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SearchProductComponent,
    EditProductComponent,
    AppDynamicFormComponent,
    AppDynamicFieldDirective,
    InputComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    ButtonModule,
    DialogModule
  ],
  providers: [SharedServices, SharedServicesProvider],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    RadioComponent
  ]
})
export class AppModule { }
