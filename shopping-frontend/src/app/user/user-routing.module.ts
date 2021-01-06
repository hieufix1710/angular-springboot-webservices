import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserLayoutComponent} from './user-layout/user-layout.component';
import {ProductComponent} from './product/product.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {HomeComponent} from '../home/home.component';
import {CommunityGoodsComponent} from './community-goods/community-goods.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {AuthGuard} from '../service/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserLayoutComponent
      },
      {
        path: 'products',
        component: ProductComponent,
      },

      {
        path: 'author-profile',
        component: UserProfileComponent
      },
      {
        path: 'community',
        component: CommunityGoodsComponent
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
