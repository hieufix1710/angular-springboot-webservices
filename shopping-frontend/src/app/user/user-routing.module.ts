import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserLayoutComponent} from './user-layout/user-layout.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AuthGuard} from '../service/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'author-profile',
        component: UserProfileComponent
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
