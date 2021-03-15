import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBaseComponent } from './app-routes/base.component';
import { EmitterSubscribeChildComponent } from './app-routes/emitter-subsribe/emitter-subscribe-child.component';
import { EmitterSubscribeComponent } from './app-routes/emitter-subsribe/emitter-subscribe.component';
import { PassFunctionChildComponent } from './app-routes/pass-function/pass-function-child.component';
import { PassFunctionComponent } from './app-routes/pass-function/pass-function.component';
import { SharedServiceChildComponent } from './app-routes/shared-service/shared-service-child.component';
import { SharedServiceComponent } from './app-routes/shared-service/shared-service.component';

const routes: Routes = [
  {path: '', component: AppBaseComponent},
  {
    path: 'emittersubscribe', 
    component: EmitterSubscribeComponent,
    children: [
      {path: '', component: EmitterSubscribeChildComponent}
    ]
  },
  {
    path: 'passfunction', 
    component: PassFunctionComponent,
    children: [
      {path: '', component: PassFunctionChildComponent}
    ]
  },
  {
    path: 'sharedservice', 
    component: SharedServiceComponent,
    children: [
      {path: '', component: SharedServiceChildComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
