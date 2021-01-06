import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { ProductComponent } from './product/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FormsModule} from '@angular/forms';
import { CommunityGoodsComponent } from './community-goods/community-goods.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [UserLayoutComponent, ProductComponent, UserProfileComponent, CommunityGoodsComponent, ProductDetailComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule
    ]
})
export class UserModule { }
