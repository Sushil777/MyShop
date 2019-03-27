import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchProductComponent } from './dashboard/products/search-product/search-product.component';
import { EditProductComponent } from './dashboard/products/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'products/search-product', component: SearchProductComponent },
  { path: 'products/edit-product', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
