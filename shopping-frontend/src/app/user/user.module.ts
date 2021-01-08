import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FormsModule} from '@angular/forms';
import { CommunityGoodsComponent } from './community-goods/community-goods.component';


@NgModule({
  declarations: [UserLayoutComponent, UserProfileComponent, CommunityGoodsComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule
    ]
})
export class UserModule { }
