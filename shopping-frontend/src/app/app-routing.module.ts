import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeFirstComponent} from './home-first/home-first.component';
import {ShopViewComponent} from './shop-view/shop-view.component';
import {BannerComponent} from './banner/banner.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {RegisterComponent} from './register/register.component';
import {ProductDetailComponent} from './user/product-detail/product-detail.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeFirstComponent,
    children: [
      {
        path: '',
        component: BannerComponent
      },
      {
        path: 'tutorial',
        component: TutorialComponent
      },

      {
        path: 'shop',
        component: ShopViewComponent,
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }



    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
