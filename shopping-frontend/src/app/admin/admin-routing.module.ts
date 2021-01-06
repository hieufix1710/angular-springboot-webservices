import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {EmployeesComponent} from './employees/employees.component';
import {AdminAuthService} from '../service/admin-auth.service';
import {ProductManagerComponent} from './product-manager/product-manager.component';
import {UploadProductComponent} from './upload-product/upload-product.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AdminAuthService],
    data : {
      expectedRole: 'admin'
    },
    children: [
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'products',
        component: ProductManagerComponent
      },
      {
        path: 'upload-product',
        component: UploadProductComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
