import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UploadProductComponent } from './upload-product/upload-product.component';


@NgModule({
  declarations: [EmployeesComponent, AdminLayoutComponent, ProductManagerComponent, UploadProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
