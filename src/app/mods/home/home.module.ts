import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../../app-routing.module';
import {SharedModule} from '../../shared/shared.module';

import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {
}
