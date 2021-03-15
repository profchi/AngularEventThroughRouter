import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBaseComponent } from './app-routes/base.component';
import { EmitterSubscribeChildComponent } from './app-routes/emitter-subsribe/emitter-subscribe-child.component';
import { EmitterSubscribeComponent } from './app-routes/emitter-subsribe/emitter-subscribe.component';
import { PassFunctionChildComponent } from './app-routes/pass-function/pass-function-child.component';
import { PassFunctionComponent } from './app-routes/pass-function/pass-function.component';
import { SharedServiceChildComponent } from './app-routes/shared-service/shared-service-child.component';
import { SharedServiceComponent } from './app-routes/shared-service/shared-service.component';
import { SharedService } from './app-routes/shared-service/shared.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBaseComponent,
    EmitterSubscribeChildComponent,
    EmitterSubscribeComponent,
    PassFunctionComponent,
    PassFunctionChildComponent,
    SharedServiceComponent,
    SharedServiceChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
