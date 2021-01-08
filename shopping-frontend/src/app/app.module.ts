import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './service/auth-interceptor.service';
import { HomeFirstComponent } from './home-first/home-first.component';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { BannerComponent } from './banner/banner.component';
import {LoadCssService} from './service/load-css.service';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RegisterComponent } from './register/register.component';
import {DatePipe} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';
import { CartComponent } from './cart/cart.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {Globals} from './Global/global';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeFirstComponent,
    ShopViewComponent,
    BannerComponent,
    TutorialComponent,
    RegisterComponent,
    CartComponent,
    ProductDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 1000,
      preventDuplicates: true,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),


  ],
  providers: [httpInterceptorProviders,LoadCssService,DatePipe, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
